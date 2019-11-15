import { getPeer } from '../../../../utils/telegram';
import { dateToDay, dateToTime } from '../../../../utils/string';
import { scrollToBottom } from '../../../../utils/dom';

class ChatWindowComponent {
	constructor() {
		this.container = null;
		this.messages = null;
		this.lastMessageDate = null;
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
		this.messagesContainer.innerHTML = '';
		this.lastMessageDate = null; // TODO
		// MtpApiManager.invokeApi('messages.getFullChat', {
		// 	chat_id: peerId
		// }, { timeout: 300, dcID: 2, createNetworker: true }).then((response) => {
		// 	console.log(response);
		// }, (e) => console.warn(e));
		MtpApiManager.invokeApi('messages.getHistory', {
			peer: getPeer(peerType, peerId, accessHash),
			offset_id: 0,
			add_offset: 0,
			limit: 60
		}, {
			timeout: 300,
			noErrorBox: true
		}).then((response) => {
			console.log(response);
			this.messages = response.messages;
			this.renderMessages(response.messages);
		}, e => console.log(e));
	}

	renderMessages(messages) {
		var fragment = document.createDocumentFragment();
		var parts = [];

		var lastDirection = 0; // -1 out, 1 in
		messages.forEach((message, i) => {
			var node = this.messageTemplate.cloneNode(true);
			var text = null;
			if (message.media) {
				text = '[MEDIA]';
			} else {
				text = message.message;
			}
			node.querySelector('.tl-speech-bubble__text-content div').innerText = text;
			var time = node.querySelector('.tl-speech-bubble__time');
			time.innerText = dateToTime(message.date);
			var bubble = node.querySelector('.tl-speech-bubble');
			if (message.pFlags.out) {
				time.classList.add('tl-speech-bubble__out-time');
				var status = document.createElement('div');
				status.classList.add('tl-2checks_svg', 'tl-2checks_svg-dims');
				node.querySelector('.tl-speech-bubble__info').appendChild(status);
				bubble.classList.add('tl-speech-bubble_my');
				if (lastDirection === 1 || lastDirection === 0) {
					bubble.classList.add('tl-speech-bubble_droplet', 'tl-speech-bubble_my-droplet');
				}
				lastDirection = -1;
			} else if(lastDirection === -1 || lastDirection === 0) {
				bubble.classList.add('tl-speech-bubble_droplet');
				lastDirection = 1;
			}
			var messageDate = dateToDay(message.date);
			if (this.lastMessageDate === null) {
				this.lastMessageDate = messageDate;
			}
			if (this.lastMessageDate !== messageDate) {
				var dateLabel = document.createElement('div');
				dateLabel.classList.add('chat-window-date');
				dateLabel.innerText = this.lastMessageDate;
				parts.push(dateLabel);
				this.lastMessageDate = messageDate;
			}
			parts.push(node);
		});

		parts.reverse().forEach((part) => fragment.appendChild(part));

		this.messagesContainer.appendChild(fragment);
		scrollToBottom(this.messagesContainer.parentNode);
	}

	unmount() {
		this.container.innerHTML = null;
		this.container = null;
	}
}

export default ChatWindowComponent;