import { dateToTime, tillNewline } from './string';

export function mapChats(response) {
	return response.dialogs.map((dialog) => {
		var peerType = dialog.peer._;
		var peer = null;
		var title = null;
		var abbreviation = null;
		var accessHash = null;

		var messageText = null;
		var message = response.messages.find((message) => message.id === dialog.top_message);
		if (message.message) {
			messageText = tillNewline(message.message);
		} else if (message.media && message.media.caption) {
			messageText = tillNewline('[MEDIA] ' + message.media.caption);
		} else {
			messageText = '[MEDIA]';
		}

		var time = dateToTime(message.date);

		if (peerType === 'peerChannel') {
			peer = response.chats.find((chat) => chat.id === dialog.peer.channel_id);
			accessHash = peer.access_hash;
			title = peer.title || '';
			abbreviation = peer.title.slice(0, 2).toUpperCase();
		} else if (peerType === 'peerChat') {
			peer = response.chats.find((chat) => chat.id === dialog.peer.chat_id);
			title = peer.title || '';
			abbreviation = peer.title.slice(0, 2).toUpperCase();
		} else if (peerType === 'peerUser') {
			peer = response.users.find((user) => user.id === dialog.peer.user_id);
			accessHash = peer.access_hash;
			if (peer.last_name) {
				title = peer.first_name + ' ' + peer.last_name;
				abbreviation = peer.first_name[0] + peer.last_name[0];
			} else {
				title = peer.first_name || '';
				abbreviation = title.slice(0, 2).toUpperCase();
			}
		}

		var photo = null;

		if (peer && peer.photo && peer.photo.photo_small) {
			photo = peer.photo.photo_small;
		}

		return {
			peerType: peerType,
			peerId: peer && peer.id,
			peerAccessHash: accessHash,
			muted: dialog.notify_settings.mute_until > 0,
			title: title,
			abbreviation: abbreviation,
			time: time,
			photo: photo,
			message: messageText,
			unread: dialog.unread_count,
			mentions: dialog.unread_mentions_count,
			originalMessage: message,
			deleted: peer.pFlags.deleted
		};
	});
}

export function loadSmallImage(location) {
	return MtpApiManager.invokeApi('upload.getFile', {
		location: Object.assign({}, location, { _: 'inputFileLocation' }),
		offset: 0,
		limit: 1024 * 1024
	}, {
		dcID: location.dc_id,
		fileDownload: true,
		createNetworker: true
	});
}

export function getNearestDC() {
	return MtpApiManager.invokeApi('help.getNearestDc', {}, {
		dcID: +localStorage.getItem('dc'),
		createNetworker: true
	}).then(function (nearestDcResult) {
		MtpApiManager.getNetworker(nearestDcResult.nearest_dc, { createNetworker: true });
		return nearestDcResult;
	});
}

export function sendCode(phoneNumberFull) {
	return MtpApiManager.invokeApi('auth.sendCode', {
		flags: 0,
		phone_number: phoneNumberFull,
		api_id: Config.App.id,
		api_hash: Config.App.hash,
		lang_code: navigator.language || 'en'
	}, {
		dcID: 2,
		createNetworker: true
	});
}

export function getPeer(peerType, peerId, peerAccessHash) {
	switch (peerType) {
		case 'peerUser':
			return { _: 'inputPeerUser', user_id: peerId, access_hash: peerAccessHash };
		case 'peerChannel':
			return { _: 'inputPeerChannel', channel_id: peerId, access_hash: peerAccessHash };
		case 'peerChat':
			return { _: 'inputPeerChat', chat_id: peerId };
	}
}

export function makePasswordHash(salt, password) {
	var passwordUTF8 = unescape(encodeURIComponent(password))

	var buffer = new ArrayBuffer(passwordUTF8.length)
	var byteView = new Uint8Array(buffer)
	for (var i = 0, len = passwordUTF8.length; i < len; i++) {
		byteView[i] = passwordUTF8.charCodeAt(i)
	}

	buffer = bufferConcat(bufferConcat(salt, byteView), salt)

	return CryptoWorker.sha256Hash(buffer)
}