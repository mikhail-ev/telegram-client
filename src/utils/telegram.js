import { tillNewline } from './string';

export function mapDialogs(response) {
	return response.dialogs.map((dialog) => {
		var peerType = dialog.peer._;
		var peer = null;
		var title = null;

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

		if (peerType === 'peerChannel') {
			peer = response.chats.find((chat) => chat.id === dialog.peer.channel_id);
			title = peer.title;
		} else if (peerType === 'peerChat') {
			peer = response.chats.find((chat) => chat.id === dialog.peer.chat_id);
			title = peer.title;
		} else if (peerType === 'peerUser') {
			peer = response.users.find((user) => user.id === dialog.peer.user_id);
			title = peer.first_name + (peer.last_name || '');
		}

		var photo = null;

		if (peer && peer.photo && peer.photo.photo_small) {
			photo = peer.photo.photo_small;
		}
		console.warn(photo);

		return {
			title: title,
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
		dcID: 2,
		fileDownload: true,
		createNetworker: true,
		noErrorBox: true
	});
}