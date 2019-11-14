import { delegate } from '../../../../utils/dom';
import { userIdAttribute } from '../../constants/attributes';
import { chatSelectEvent } from '../../constants/events';
import { loadSmallImage, mapDialogs } from '../../../../utils/telegram';
import { bytesToImageBase64, getImageMime } from '../../../../utils/string';

class ChatInfo {
	constructor(userId) {
		this.userId = userId;
	}
}

class ChatsComponent {
	constructor() {
		this.container = null;
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
			var selectEvent = new Event(chatSelectEvent);
			selectEvent.data = new ChatInfo(delegated.getAttribute(userIdAttribute));
			this.container.dispatchEvent(selectEvent);
			console.log('dispatch');
		}
	};

	load() {
		MtpApiManager.invokeApi('messages.getDialogs', {
			flags: 0,
			offset_date: 0,
			offset_id: 0,
			offset_peer: { '_': 'inputPeerEmpty' },
			limit: 1
		}, { timeout: 300, dcID: 2, createNetworker: true }).then((response) => {
			console.warn(response);
			this.renderChats(mapDialogs(response));
		}, (e) => console.warn(e));
	}

	renderChats(chats) {
		console.warn(chats);
		var fragment = document.createDocumentFragment();
		chats.forEach((chat) => {
			var node = this.chatTemplate.cloneNode(true);
			node.querySelector('.chat__name').innerText = chat.title;
			node.querySelector('.chat__time').innerText = chat.time;
			node.querySelector('.chat__message').innerText = chat.message;

			var imageContainer = node.querySelector('.chat__image');
			if (chat.photo) {
				loadSmallImage(chat.photo).then(response => {
					var mime = getImageMime(response.type._);
					var base64 = bytesToImageBase64(response.bytes, mime);
					var image = document.createElement('img');
					image.setAttribute('src', base64);
					imageContainer.appendChild(image);
				});
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