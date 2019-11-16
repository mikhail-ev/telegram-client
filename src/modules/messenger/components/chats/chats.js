import { delegate } from '../../../../utils/dom';
import { peerIdAttribute, peerTypeAttribute } from '../../constants/attributes';
import { chatSelectEvent } from '../../constants/events';
import { getPeer, loadSmallImage, mapDialogs } from '../../../../utils/telegram';
import { bytesToImageBase64, getImageMime, stringToHex } from '../../../../utils/string';

class ChatsComponent {
	constructor() {
		this.container = null;
		this.loadLimit = 20;
		this.reset();
	}

	reset() {
		this.listEnd = false;
		this.lastDialog = null;
		this.viewOffset = 0;
		this.dialogs = [];
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
		this.loader.classList.add('chats__loader');
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
			var peer = this.dialogs.find((peer) => peer.peerId.toString() === peerId);
			var selectEvent = new Event(chatSelectEvent);
			selectEvent.data = peer;
			this.container.dispatchEvent(selectEvent);
		}
	};

	handleScroll = (event) => {
		var scrollRemains = event.target.scrollHeight - (event.target.offsetHeight + event.target.scrollTop);
		if (!this.listEnd && !this.isLoading && scrollRemains < 70) {
			this.isLoading = true;
			var scrollPosition = this.content.scrollTop;
			this.load().then((dialogs) => {
				this.appendDialogs(dialogs);
				this.content.scrollTop = scrollPosition;
				this.isLoading = false;
			})
		}
	};

	load() {
		return MtpApiManager.invokeApi('messages.getDialogs', {
			flags: 1,
			offset_date: this.lastDialog ? this.lastDialog.originalMessage.date : 0,
			offset_id: this.lastDialog ? this.lastDialog.originalMessage.id : 0,
			offset_peer: this.lastDialog ?
				getPeer(this.lastDialog.peerType, this.lastDialog.peerId, this.lastDialog.peerAccessHash) :
				{ '_': 'inputPeerEmpty' },
			limit: this.loadLimit
		}, { timeout: 300, dcID: 2, createNetworker: true }).then((response) => {
			var dialogs = mapDialogs(response);
			this.count = response.count;
			if (dialogs.length !== 0) {
				this.lastDialog = dialogs[dialogs.length - 1];
				this.dialogs = this.dialogs.concat(dialogs);
			}
			if (this.count === this.dialogs.length) {
				this.loader.style.display = 'none';
			}
			return dialogs;
		})
	}

	initData() {
		this.isLoading = true;
		this.load().then((dialogs) => {
			var loaderDisplay = this.loader.style.display;
			this.loader.style.display = 'none';
			this.appendDialogs(dialogs);
			this.loader.classList.add('chats__loader_progress');
			this.loader.style.display = loaderDisplay;
			this.isLoading = false;
		});
	}

	appendDialogs(dialogs) {
		var block = this.renderChats(dialogs);
		this.content.appendChild(block);
		var rect = block.getBoundingClientRect();
		block.style.top = this.viewOffset + 'px';
		this.viewOffset += rect.height;
		this.contentSpacer.style.height = this.viewOffset + 'px';
	}

	renderChats(chats) {
		var fragment = document.createDocumentFragment();
		chats.forEach((chat) => {
			var node = this.chatTemplate.cloneNode(true);
			node.querySelector('.chat').setAttribute(peerIdAttribute, chat.peerId);
			node.querySelector('.chat').setAttribute(peerTypeAttribute, chat.peerType);
			node.querySelector('.chat__name').innerText = chat.title;
			node.querySelector('.chat__time').innerText = chat.time;
			node.querySelector('.chat__message').innerText = chat.message;

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
