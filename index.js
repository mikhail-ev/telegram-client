///// 1. Getting the PQ
var reqPqBody = new TLSerialization({ mtproto: true });
var nonce = randomNumber(16);
reqPqBody.storeMethod('req_pq', { nonce: randomNumber(16) });
var reqPqRequestBuffer = prepareRequest(reqPqBody.getBuffer());

sendRequest(new Int32Array(reqPqRequestBuffer)).then((request) => {
    var deserializer = new TLDeserialization(request.response, { mtproto: true });
    var auth_key_id = deserializer.fetchLong('auth_key_id');
    var msg_id = deserializer.fetchLong('msg_id');
    var msg_len = deserializer.fetchInt('msg_len');
    var resPq = deserializer.fetchObject('ResPQ');
    console.log(auth_key_id, msg_id, msg_len, resPq);

    //////// Sending proof of work

    var publicKey = selectRsaKeyByFingerPrint(resPq.server_public_key_fingerprints);
    var pqArray = pqPrimeFactorization(resPq.pq);
    var newNonce = randomNumber(32);

    var innerPqData = new TLSerialization({ mtproto: true })
    innerPqData.storeObject({
        _: 'p_q_inner_data',
        pq: resPq.pq,
        p: pqArray[0],
        q: pqArray[1],
        nonce: resPq.nonce,
        server_nonce: resPq.server_nonce,
        new_nonce: newNonce
    }, 'P_Q_inner_data', 'DECRYPTED_DATA');
    var innerPqDataHash = sha1BytesSync(innerPqData.getBuffer()).concat(innerPqData.getBytes());

    var reqDhParamsBody = new TLSerialization({ mtproto: true })
    reqDhParamsBody.storeMethod('req_DH_params', {
        nonce: resPq.nonce,
        server_nonce: resPq.server_nonce,
        p: pqArray[0],
        q: pqArray[1],
        public_key_fingerprint: publicKey.fingerprint,
        encrypted_data: rsaEncrypt(publicKey, innerPqDataHash)
    });
    var reqDhParamsRequestBuffer = prepareRequest(reqDhParamsBody.getBuffer());
    console.log(reqDhParamsRequestBuffer);

    sendRequest(new Int32Array(reqDhParamsRequestBuffer)).then((request) => {
        var deserializer = new TLDeserialization(request.response, { mtproto: true })
        var auth_key_id = deserializer.fetchLong('auth_key_id');
        var msg_id = deserializer.fetchLong('msg_id');
        var msg_len = deserializer.fetchInt('msg_len');
        var serverDHParams = deserializer.fetchObject('Server_DH_Params', 'RESPONSE');

        if (serverDHParams._ !== 'server_DH_params_ok') {
            throw new Error('DH was not accepted by server');
        }

        console.log(auth_key_id, msg_id, msg_len, serverDHParams);

        ///// Decrypting server inner data

        var localTime = getUnixtime();

        var tmpAesKey = sha1BytesSync(newNonce.concat(serverDHParams.server_nonce))
            .concat(sha1BytesSync(serverDHParams.server_nonce.concat(newNonce)).slice(0, 12))
        var tmpAesIv = sha1BytesSync(serverDHParams.server_nonce.concat(newNonce))
            .slice(12).concat(sha1BytesSync([].concat(newNonce, newNonce)), newNonce.slice(0, 4));
        var decryptedAnswerWithHashAndPadding = aesDecryptSync(serverDHParams.encrypted_answer, tmpAesKey, tmpAesIv);
        var decryptedAnswerWithPadding = decryptedAnswerWithHashAndPadding.slice(20);
        var decryptedAnswerBuffer = bytesToArrayBuffer(decryptedAnswerWithPadding);
        var decryptedAnswerDeserializer = new TLDeserialization(decryptedAnswerBuffer, { mtproto: true })
        var serverDHInnerData = decryptedAnswerDeserializer.fetchObject('Server_DH_inner_data');

        if (serverDHInnerData._ != 'server_DH_inner_data') {
            throw new Error('Server inner DH data has wrong constuctor: ' + serverDHInnerData._);
        }

        saveServerTimeOffset(serverDHInnerData.server_time);

        console.log(serverDHInnerData);

        ////// G_B Calculation

        var gBytes = bytesFromHex(serverDHInnerData.g.toString(16));
        var b = randomNumber(256);
        console.log('gB start');
        var gB = bytesModPow(gBytes, b, serverDHInnerData.dh_prime);
        console.log('gB', gB);

        var clientInnerDataRequestRetry = 0;
        var clientInnerData = new TLSerialization({ mtproto: true })
        clientInnerData.storeObject({
            _: 'client_DH_inner_data',
            nonce: serverDHParams.nonce,
            server_nonce: serverDHParams.server_nonce,
            retry_id: [0, clientInnerDataRequestRetry++],
            g_b: gB
        }, 'Client_DH_Inner_Data');
        var clientInnerDataHash = sha1BytesSync(clientInnerData.getBuffer()).concat(clientInnerData.getBytes());
        console.log('hash', clientInnerDataHash);
        var clientInnerDataEncrypted = aesEncryptSync(clientInnerDataHash, tmpAesKey, tmpAesIv);
        console.log('enc', clientInnerDataEncrypted);

        var setClientHDParamsBody = new TLSerialization({ mtproto: true })
        setClientHDParamsBody.storeMethod('set_client_DH_params', {
            nonce: serverDHParams.nonce,
            server_nonce: serverDHParams.server_nonce,
            encrypted_data: clientInnerDataEncrypted
        });

        console.log('body serialized');

        var setClientHDParamsBodyBuffer = setClientHDParamsBody.getBuffer();

        console.log('body bufferized', setClientHDParamsBodyBuffer);

        setTimeout(() => {
            var setClientHDParamsRequestBuffer = prepareRequest(setClientHDParamsBodyBuffer);
            console.log('request bufferized', setClientHDParamsRequestBuffer);

            sendRequest(new Int32Array(setClientHDParamsRequestBuffer)).then((request) => {
                console.log('response', request.response);
                var deserializer = new TLDeserialization(request.response, { mtproto: true });
                var auth_key_id = deserializer.fetchLong('auth_key_id');
                var msg_id = deserializer.fetchLong('msg_id');
                var msg_len = deserializer.fetchInt('msg_len');
                var setClientHDParamsAnswer = deserializer.fetchObject('Set_client_DH_params_answer');

                if (setClientHDParamsAnswer._ !== 'dh_gen_ok') {
                    throw new Error('DH generation is not OK');
                }

                console.log(auth_key_id, msg_id, msg_len, setClientHDParamsAnswer);

                ///// Calculation Auth key

                var authKey = bytesModPow(gBytes, serverDHInnerData.g_a, serverDHInnerData.dh_prime);
                var authKeyHash = sha1BytesSync(authKey);
                var authKeyAux = authKeyHash.slice(0, 8);
                var authKeyID = authKeyHash.slice(-8);
                var serverSalt = bytesXor(newNonce.slice(0, 8), setClientHDParamsAnswer.server_nonce.slice(0, 8));
                console.log('authkey', authKey);

                /////

                var sessionId = randomNumber(8);

                /////

                MtpNetworker.prototype.sendEncryptedRequest = function (message, options) {
                    var self = this
                    options = options || {}
                    // console.log(dT(), 'Send encrypted'/*, message*/)
                    // console.trace()
                    var data = new TLSerialization({startMaxLength: message.body.length + 2048})

                    data.storeIntBytes(this.serverSalt, 64, 'salt')
                    data.storeIntBytes(this.sessionID, 64, 'session_id')

                    data.storeLong(message.msg_id, 'message_id')
                    data.storeInt(message.seq_no, 'seq_no')

                    data.storeInt(message.body.length, 'message_data_length')
                    data.storeRawBytes(message.body, 'message_data')

                    var dataBuffer = data.getBuffer()

                    var paddingLength = (16 - (data.offset % 16)) + 16 * (1 + nextRandomInt(5))
                    var padding = new Array(paddingLength)
                    MtpSecureRandom.nextBytes(padding)

                    var dataWithPadding = bufferConcat(dataBuffer, padding)
                    // console.log(dT(), 'Adding padding', dataBuffer, padding, dataWithPadding)
                    // console.log(dT(), 'auth_key_id', bytesToHex(self.authKeyID))

                    return this.getEncryptedMessage(dataWithPadding).then(function (encryptedResult) {
                        // console.log(dT(), 'Got encrypted out message'/*, encryptedResult*/)
                        var request = new TLSerialization({startMaxLength: encryptedResult.bytes.byteLength + 256})
                        request.storeIntBytes(self.authKeyID, 64, 'auth_key_id')
                        request.storeIntBytes(encryptedResult.msgKey, 128, 'msg_key')
                        request.storeRawBytes(encryptedResult.bytes, 'encrypted_data')

                        var requestData = xhrSendBuffer ? request.getBuffer() : request.getArray()

                        var requestPromise
                        var url = MtpDcConfigurator.chooseServer(self.dcID, self.upload)
                        var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url}

                        try {
                            options = angular.extend(options || {}, {
                                responseType: 'arraybuffer',
                                transformRequest: null
                            })
                            requestPromise = $http.post(url, requestData, options)
                        } catch (e) {
                            requestPromise = $q.reject(e)
                        }
                        return requestPromise.then(
                            function (result) {
                                if (!result.data || !result.data.byteLength) {
                                    return $q.reject(baseError)
                                }
                                return result
                            },
                            function (error) {
                                if (!error.message && !error.type) {
                                    error = angular.extend(baseError, {type: 'NETWORK_BAD_REQUEST', originalError: error})
                                }
                                return $q.reject(error)
                            }
                        )
                    })
                }
            });
        }, 500); // it's not working without timeout
    });
});