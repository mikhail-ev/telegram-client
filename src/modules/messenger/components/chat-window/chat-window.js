import { getPeer } from '../../../../utils/telegram';
import { dateToDay, dateToTime } from '../../../../utils/string';
import { scrollToBottom } from '../../../../utils/dom';

class ChatWindowComponent {
	constructor() {
		this.container = null;
		this.loadLimit = 60;
		this.reset();
	}

	reset() {
		this.messages = null;
		this.lastMessageDate = null;
		this.viewOffset = 0;
		this.messagesOffset = 0;
		this.chatEnd = false;
		this.isLoading = false;
		this.peerType = null;
		this.peerId = null;
		this.peerAccessHash = null;
		this.lastBlockHeight = 0;
	}

	mount(container) {
		var templateId = 'chatWindowComponent';
		var template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;
		this.messagesContainer = this.container.querySelector('.messenger-chat__messages-wrapper');
		this.messageTemplate = document.getElementById('chatWindowMessageTemplate').content;
	}

	openChat(peerId, peerType, peerAccessHash) {
		this.reset();

		this.peerId = peerId;
		this.peerType = peerType;
		this.peerAccessHash = peerAccessHash;

		this.messagesContainer.innerHTML = '';
		this.messagesContainer.removeEventListener('scroll', this.handleScroll);
		this.messagesContainerSpacer = document.createElement('div');
		this.messagesContainerSpacer.classList.add('messenger-chat__spacer');
		this.messagesContainer.appendChild(this.messagesContainerSpacer);

		this.isLoading = true;
		this.loadMessages().then((response) => {
			this.appendMessages(response.messages);
			this.messages = response.messages;
			scrollToBottom(this.messagesContainer);
			setTimeout(() => {
				this.isLoading = false;
				this.messagesContainer.addEventListener('scroll', this.handleScroll);
			});
		}, e => console.error(e));
	}

	loadMessages() {
		return MtpApiManager.invokeApi('messages.getHistory', {
			peer: getPeer(this.peerType, this.peerId, this.peerAccessHash),
			offset_id: 0,
			add_offset: this.messagesOffset,
			limit: this.loadLimit
		}, {
			timeout: 300,
			noErrorBox: true
		}).then((response) => {
			this.messagesOffset += response.messages.length;
			if (response.messages.length === 0) {
				this.chatEnd = true;
			}
			return response;
		}, (error) => {
			this.isLoading = false;
			return error;
		});
	}

	handleScroll = (event) => {
		if (!this.chatEnd && !this.isLoading && event.target.scrollTop < 50) {
			this.isLoading = true;
			this.loadMessages().then((response) => {
				this.appendMessages(response.messages);
				this.messagesContainer.scrollTop = this.lastBlockHeight;
				this.messages = this.messages.concat(response.messages);
				this.isLoading = false;
			}, (e) => console.error(e));
		}
	};

	appendMessages(messages) {
		var container = this.renderMessages(messages);
		this.messagesContainerSpacer.appendChild(container);
		container.style.bottom = this.viewOffset + 'px';
		var rect = container.getBoundingClientRect();
		this.lastBlockHeight = rect.height;
		this.viewOffset += this.lastBlockHeight;
		this.messagesContainerSpacer.style.height = this.viewOffset + 'px';
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
			} else if (lastDirection === -1 || lastDirection === 0) {
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

		var container = document.createElement('div');
		container.classList.add('messenger-chat__messages');
		container.appendChild(fragment);

		return container;
	}

	unmount() {
		this.container.innerHTML = null;
		this.container = null;
	}
}

export default ChatWindowComponent;