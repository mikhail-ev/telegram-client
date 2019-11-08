window.CryptoWorker = (function () {
    var $timeout = window.$timeout;
    return {
        sha1Hash: function (bytes) {
            return $timeout(function () {
                return sha1HashSync(bytes)
            })
        },
        sha256Hash: function (bytes) {
            return $timeout(function () {
                return sha256HashSync(bytes)
            })
        },
        aesEncrypt: function (bytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesEncryptSync(bytes, keyBytes, ivBytes))
            })
        },
        aesDecrypt: function (encryptedBytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesDecryptSync(encryptedBytes, keyBytes, ivBytes))
            })
        },
        factorize: function (bytes) {
            return $timeout(function () {
                return pqPrimeFactorization(bytes)
            })
        },
        modPow: function (x, y, m) {
            return $timeout(function () {
                return bytesModPow(x, y, m)
            })
        }
    };
}());