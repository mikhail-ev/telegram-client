import { tillNewline } from './string';

export function mapDialogs(response) {
	return response.dialogs.map((dialog) => {
		var peerType = dialog.peer._;
		var peer = null;
		var title = null;
		var abbreviation = null;

		var messageText = null;
		var message = response.messages.find((message) => message.id === dialog.top_message);
		if (message.message) {
			messageText = tillNewline(message.message);
		} else if (message.media && message.media.caption) {
			messageText = tillNewline(message.media.caption);
		} else {
			messageText = 'Media';
		}

		var date = new Date(message.date * 1000);
		var time = date.getHours() + ':' + date.getMinutes();

		console.log(dialog);

		if (peerType === 'peerChannel') {
			peer = response.chats.find((chat) => chat.id === dialog.peer.channel_id);
			title = peer.title;
			abbreviation = peer.title.slice(0, 2);
		} else if (peerType === 'peerChat') {
			peer = response.chats.find((chat) => chat.id === dialog.peer.chat_id);
			title = peer.title;
			abbreviation = peer.title.slice(0, 2);
		} else if (peerType === 'peerUser') {
			peer = response.users.find((user) => user.id === dialog.peer.user_id);
			if (peer.last_name) {
				title = peer.first_name + ' ' + peer.last_name;
				abbreviation = peer.first_name[0] + peer.last_name[0];
			} else {
				title = peer.first_name;
				abbreviation = peer.first_name.slice(0, 2);
			}
		}

		var photo = null;

		if (peer && peer.photo && peer.photo.photo_small) {
			photo = peer.photo.photo_small;
		}

		return {
			peerType: peerType,
			peerId: peer && peer.id,
			muted: dialog.notify_settings.mute_until > 0,
			title: title,
			abbreviation: abbreviation,
			time: time,
			photo: photo,
			message: messageText,
			unread: dialog.unread_count,
			mentions: dialog.unread_mentions_count,
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