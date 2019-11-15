import { delegate } from '../../../../utils/dom';
import { peerIdAttribute, peerTypeAttribute } from '../../constants/attributes';
import { chatSelectEvent } from '../../constants/events';
import { loadSmallImage, mapDialogs } from '../../../../utils/telegram';
import { bytesToImageBase64, getImageMime, stringToHex } from '../../../../utils/string';

class ChatsComponent {
	constructor() {
		this.container = null;
		this.chats = null;
	}

	mount(container) {
		let templateId = 'chatsComponent';
		let template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;
		this.container.addEventListener('click', this.handleClick, true);

		this.content = this.container.querySelector('.chats__content');
		this.chatTemplate = document.getElementById('chatComponentPlateTemplate').content;

		this.load();
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

	load() {
		MtpApiManager.invokeApi('messages.getDialogs', {
			flags: 0,
			offset_date: 0,
			offset_id: 0,
			offset_peer: { '_': 'inputPeerEmpty' },
			limit: 20
		}, { timeout: 300, dcID: 2, createNetworker: true }).then((response) => {
			console.log(response);
			this.renderChats(mapDialogs(response));
		}, (e) => console.warn(e));
	}

	renderChats(chats) {
		var fragment = document.createDocumentFragment();
		this.chats = chats;
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
		this.content.appendChild(fragment);
	}

	unmount() {
		this.container.innerHTML = '';
		this.container.removeEventListener('click', this.handleClick);
		this.container = null;
	}
}

export default ChatsComponent;
