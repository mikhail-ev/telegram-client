import { getPeer } from '../../../../utils/telegram';
import { dateToTime } from '../../../../utils/string';

class ChatWindowComponent {
	constructor() {
		this.container = null;
	}

	mount(container) {
		var templateId = 'chatWindowComponent';
		var template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;
		this.messagesContainer = this.container.querySelector('.messenger-chat__messages');
		this.messageTemplate = document.getElementById('chatWindowMessageTemplate').content;
	}

	openChat(peerId, peerType, accessHash) {
		// MtpApiManager.invokeApi('messages.getFullChat', {
		// 	chat_id: peerId
		// }, { timeout: 300, dcID: 2, createNetworker: true }).then((response) => {
		// 	console.log(response);
		// }, (e) => console.warn(e));
		MtpApiManager.invokeApi('messages.getHistory', {
			peer: getPeer(peerType, peerId, accessHash),
			offset_id: 0,
			add_offset: 0,
			limit: 20
		}, {
			timeout: 300,
			noErrorBox: true
		}).then((response) => {
			this.renderMessages(response.messages.slice().reverse());
		}, e => console.log(e));
	}

	renderMessages(messages) {
		this.messagesContainer.innerHTML = '';
		var fragment = document.createDocumentFragment();

		messages.forEach((message) => {
			var node = this.messageTemplate.cloneNode(true);
			node.querySelector('.tl-speech-bubble__text-content div').innerText = message.message;
			node.querySelector('.tl-speech-bubble__time').innerText = dateToTime(message.date);
			if (message.pFlags.out) {
				node.querySelector('.tl-speech-bubble').classList
					.add('tl-speech-bubble_my', 'tl-speech-bubble_my-droplet');
			}
			fragment.appendChild(node);
		});

		this.messagesContainer.appendChild(fragment);
	}

	unmount() {
		this.container.innerHTML = null;
		this.container = null;
	}
}

export default ChatWindowComponent;