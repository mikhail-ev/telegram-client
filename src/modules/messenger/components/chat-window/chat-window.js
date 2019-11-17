import { getPeer, loadSmallImage } from '../../../../utils/telegram';
import { bytesToImageBase64, dateToDay, dateToTime, getImageMime, stringToHex } from '../../../../utils/string';
import { scrollToBottom } from '../../../../utils/dom';

class ChatWindowComponent {
	constructor() {
		this.container = null;
		this.loadLimit = 60;
		this.reset();
	}

	reset() {
		this.messages = [];
		this.count = 0;
		this.loader = null;
		this.lastMessageDate = null;
		this.viewOffset = 0;
		this.isLoading = false;
		this.chat = null;
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

	openChat(chat) {
		this.reset();

		this.chat = chat;

		this.updateHeader();

		this.messagesContainer.innerHTML = '';
		this.messagesContainer.removeEventListener('scroll', this.handleScroll);
		var spinner = document.createElement('div');
		spinner.classList.add('tl-spinner');
		this.loader = document.createElement('div');
		this.loader.classList.add('tl-spinner-container', 'tl-spinner-container_force-centered');
		this.loader.appendChild(spinner);
		this.messagesContainer.appendChild(this.loader);
		this.messagesContainerSpacer = document.createElement('div');
		this.messagesContainerSpacer.style.position = 'relative';
		this.messagesContainer.appendChild(this.messagesContainerSpacer);

		this.initData();
	}

	updateHeader() {
		var logo;
		if (this.chat.imageBase64) {
			logo = document.createElement('img');
			logo.src = this.chat.imageBase64;
		} else {
			logo = document.createElement('div');
			logo.style.backgroundColor = '#' + stringToHex(this.chat.title);
			logo.innerText = this.chat.abbreviation;
		}
		var logoContainer = this.container.querySelector('.messenger-chat__person-image');
		logoContainer.innerHTML = '';
		logoContainer.appendChild(logo);

		this.container.querySelector('.messenger-chat__person-name').innerText = this.chat.title;

		var additionalInfoContainer = this.container.querySelector('.messenger-chat__person-additional-info');
		switch (this.chat.peerType) {
			case 'peerUser': {
				additionalInfoContainer.innerText = this.chat.status;
				if (this.chat.online) {
					additionalInfoContainer.classList.add('messenger-chat__person-additional-info',
						'messenger-chat__person-additional-info_status-online');
				}
				break;
			}
			case 'peerChannel': {
				additionalInfoContainer.innerText = '';
				MtpApiManager.invokeApi('channels.getFullChannel', {
					channel: getPeer(this.chat.peerType, this.chat.peerId, this.chat.peerAccessHash)
				}, {
					dcID: 2,
					createNetworker: true
				}).then(r => {
					additionalInfoContainer.innerText = r.full_chat.participants_count + ' subscribers';
				});
				break;
			}
			case 'peerChat': {
				additionalInfoContainer.innerText = '';
				MtpApiManager.invokeApi('messages.getFullChat', {
					chat_id: this.chat.peerId
				}, {
					dcID: 2,
					createNetworker: true
				}).then(r => {
					console.log('chat', r);
					additionalInfoContainer.innerText = r.full_chat.participants.participants.length + ' members';
				});
				break;
			}
			default: {
				additionalInfoContainer.innerText = '';
				break;
			}
		}
	}

	initData() {
		this.isLoading = true;
		this.loadMessages().then((response) => {
			var loaderDisplay = this.loader.style.display;
			this.loader.style.display = 'none';
			this.loader.classList.add('tl-spinner-container_runtime');
			this.appendMessages(response.messages);
			this.loader.style.display = loaderDisplay;
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
			peer: getPeer(this.chat.peerType, this.chat.peerId, this.chat.peerAccessHash),
			offset_id: 0,
			add_offset: this.messages.length,
			limit: this.loadLimit
		}, {
			timeout: 300,
			noErrorBox: true
		}).then((response) => {
			console.log(response);
			this.messages = this.messages.concat(response.messages);
			if (this.messages.length === response.count) {
				this.loader.style.display = 'none';
			}
			return response;
		});
	}

	isLoaded() {
		return this.count === this.messages.length;
	}

	handleScroll = (event) => {
		if (!this.isLoaded() && !this.isLoading && event.target.scrollTop < 50) {
			this.isLoading = true;
			this.loadMessages().then((response) => {
				this.appendMessages(response.messages);
				this.messagesContainer.scrollTop = this.lastBlockHeight;
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

			node.querySelector('.tl-speech-bubble__text-content div')
				.replaceWith(this.getMessage(message));

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

	getMessage(message) {
		if (message.media) {
			switch (message.media._) {
				case 'messageMediaWebPage': {
					return this.getWebPageMessage(message);
				}
				case 'messageMediaPhoto': {
					return this.getPhotoMessage(message)
				}
				case 'messageMediaDocument': {
					return this.getMediaDocumentMessage(message)
				}
				default: {
					return this.getOtherMessage(message);
				}
			}
		} else if (message.message) {
			return this.getRegularMessage(message);
		}
		return this.getOtherMessage(message);
	}

	getPhotoMessage(message) {
		var node = document.createElement('div');
		var sizeNumber = Math.min(1, message.media.photo.sizes.length);
		var size = message.media.photo.sizes[sizeNumber];
		var image = this.createImage(size);
		node.appendChild(image);
		if (message.media.caption) {
			var mediaCaptionNode = document.createElement('div');
			mediaCaptionNode.innerText = message.media.caption;
			node.appendChild(mediaCaptionNode);
		}
		return node;
	}

	getWebPageMessage(message) {
		var node = this.getRegularMessage(message);
		var page = document.createElement('div');
		page.innerText = 'quote: ' + message.media.webpage.description;
		node.appendChild(page);
		return node;
	}

	getMediaDocumentMessage(message) {
		var node = document.createElement('div');
		var documentNode = document.createElement('div');
		documentNode.innerText = '📎';
		node.appendChild(documentNode);
		console.warn(message);
		if (message.media.caption) {
			var captionNode = document.createElement('div');
			captionNode.innerText = message.media.caption;
			node.appendChild(captionNode);
		}
		// if (message.media.document.thumb) {
		// 	var image = this.createImage(message.media.document.thumb);
		// 	node.appendChild(image);
		// }
		// console.log(message);
		return node;
	}

	getRegularMessage(message) {
		var node = document.createElement('div');
		node.innerText = message.message;
		return node;
	}

	getOtherMessage(message) {
		console.warn('Unrecognized message type', message);
		var node = document.createElement('div');
		node.innerText = 'Message content';
		return node;
	}

	createImage(size) {
		var image = document.createElement('img');
		image.style.height = size.h;
		image.style.opacity = '0';
		loadSmallImage(size.location).then((response) => {
			var mime = getImageMime(response.type._);
			image.src = bytesToImageBase64(response.bytes, mime);
			image.style.opacity = '1';
		});
		return image;
	}

	unmount() {
		this.container.innerHTML = null;
		this.container = null;
	}
}

export default ChatWindowComponent;