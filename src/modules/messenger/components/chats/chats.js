import { delegate } from '../../../../utils/dom';
import { peerIdAttribute, peerTypeAttribute } from '../../constants/attributes';
import { chatSelectEvent } from '../../constants/events';
import { getPeer, loadSmallImage, mapChats } from '../../../../utils/telegram';
import { bytesToImageBase64, getImageMime, stringToHex } from '../../../../utils/string';

class ChatsComponent {
	constructor() {
		this.container = null;
		this.loader = null;
		this.loadLimit = 20;
		this.reset();
	}

	reset() {
		this.lastChat = null;
		this.viewOffset = 0;
		this.chats = [];
		this.count = 0;
	}

	mount(container) {
		let templateId = 'chatsComponent';
		let template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;
		this.container.addEventListener('click', this.handleClick, true);

		this.content = this.container.querySelector('.chats__content');
		this.contentSpacer = document.createElement('div');
		this.content.appendChild(this.contentSpacer);
		this.loader = document.createElement('div');
		this.loader.classList.add('tl-spinner-container');
		var spinner = document.createElement('div');
		spinner.classList.add('tl-spinner');
		this.loader.appendChild(spinner);
		this.content.appendChild(this.loader);
		this.content.addEventListener('scroll', this.handleScroll);
		this.chatTemplate = document.getElementById('chatComponentPlateTemplate').content;

		this.initData();
	}

	handleClick = (event) => {
		var delegated = delegate(event, '.chat', this.container);
		if (delegated) {
			var peerId = delegated.getAttribute(peerIdAttribute);
			var peer = this.chats.find((peer) => peer.peerId.toString() === peerId);
			var selectEvent = new Event(chatSelectEvent);
			selectEvent.data = peer;
			this.container.dispatchEvent(selectEvent);
		}
	};

	handleScroll = (event) => {
		var scrollRemains = event.target.scrollHeight - (event.target.offsetHeight + event.target.scrollTop);
		if (!this.isLoaded() && !this.isLoading && scrollRemains < 70) {
			this.isLoading = true;
			var scrollPosition = this.content.scrollTop;
			this.load().then((chats) => {
				this.appendChats(chats);
				this.content.scrollTop = scrollPosition;
				this.isLoading = false;
			})
		}
	};

	isLoaded() {
		return this.count === this.chats.length;
	}

	load() {
		return MtpApiManager.invokeApi('messages.getDialogs', {
			flags: 1,
			offset_date: this.lastChat ? this.lastChat.originalMessage.date : 0,
			offset_id: this.lastChat ? this.lastChat.originalMessage.id : 0,
			offset_peer: this.lastChat ?
				getPeer(this.lastChat.peerType, this.lastChat.peerId, this.lastChat.peerAccessHash) :
				{ '_': 'inputPeerEmpty' },
			limit: this.loadLimit
		}, { timeout: 300, dcID: 2, createNetworker: true }).then((response) => {
			console.log(response);
			var chats = mapChats(response);
			this.count = response.count;
			if (chats.length !== 0) {
				this.lastChat = chats[chats.length - 1];
				this.chats = this.chats.concat(chats);
				this.loader.style.display = 'none';
			}
			return chats;
		})
	}

	initData() {
		this.isLoading = true;
		this.load().then((chats) => {
			var loaderDisplay = this.loader.style.display;
			this.loader.style.display = 'none';
			this.appendChats(chats);
			this.loader.classList.add('tl-spinner-container_runtime');
			this.loader.style.display = loaderDisplay;
			this.isLoading = false;
		});
	}

	appendChats(chats) {
		var block = this.renderChats(chats);
		this.content.appendChild(block);
		var rect = block.getBoundingClientRect();
		block.style.top = this.viewOffset + 'px';
		this.viewOffset += rect.height;
		this.contentSpacer.style.height = this.viewOffset + 'px';
	}

	renderChats(chats) {
		var fragment = document.createDocumentFragment();
		chats.forEach((chat) => {
			console.log(chat);
			var node = this.chatTemplate.cloneNode(true);
			node.querySelector('.chat').setAttribute(peerIdAttribute, chat.peerId);
			node.querySelector('.chat').setAttribute(peerTypeAttribute, chat.peerType);
			node.querySelector('.chat__name').innerText = chat.title;
			node.querySelector('.chat__time').innerText = chat.time;
			var messageContainer = node.querySelector('.chat__message');
			if (chat.peerType !== 'peerUser' && chat.author) {
				var authorNode = document.createElement('span');
				authorNode.innerText = chat.author.first_name + ': ';
				messageContainer.appendChild(authorNode);
			}
			var messageNode = document.createElement('span');
			messageNode.innerText = chat.message;
			messageContainer.appendChild(messageNode);

			if (chat.unread && chat.unread > 0) {
				var unreadIcon = document.createElement('div');
				unreadIcon.classList.add('chat-icon');
				if (chat.muted) {
					unreadIcon.classList.add('chat-icon_muted');
				}
				unreadIcon.innerText = chat.unread;
				node.querySelector('.chat__icons').appendChild(unreadIcon);
			}

			var imageContainer = node.querySelector('.chat__image');
			if (chat.photo) {
				loadSmallImage(chat.photo).then(response => {
					// TODO
					// {
					// 	"code": 401,
					// 	"type": "AUTH_KEY_UNREGISTERED",
					// 	"description": "CODE#401 AUTH_KEY_UNREGISTERED",
					// 	"originalError": {
					// 	"_": "rpc_error",
					// 		"error_code": 401,
					// 		"error_message": "AUTH_KEY_UNREGISTERED"
					// },
					// 	"input": "upload.getFile",
					// 	"stack": "Error\n    at Object.mtpInvokeApi [as invokeApi] (http://localhost:4000/vendors.js:10738:22)\n    at loadSmallImage (http://localhost:4000/messenger.js:115:25)\n    at http://localhost:4000/messenger.js:205:10\n    at Array.forEach (<anonymous>)\n    at ChatsComponent.renderChats (http://localhost:4000/messenger.js:182:12)\n    at http://localhost:4000/messenger.js:176:13"
					// }
					var mime = getImageMime(response.type._);
					var base64 = bytesToImageBase64(response.bytes, mime);
					chat.imageBase64 = base64;
					var image = document.createElement('img');
					image.setAttribute('src', base64);
					imageContainer.appendChild(image);
				}, (error) => {
					console.error(error, chat.photo);
				});
			} else {
				var logo = document.createElement('div');
				logo.style.backgroundColor = '#' + stringToHex(chat.title);
				logo.innerText = chat.abbreviation;
				imageContainer.appendChild(logo);
			}

			fragment.appendChild(node);
		});

		var block = document.createElement('div');
		block.classList.add('chats__block');
		block.appendChild(fragment);

		return block;
	}

	unmount() {
		this.container.innerHTML = '';
		this.container.removeEventListener('click', this.handleClick);
		this.container = null;
	}
}

export default ChatsComponent;
