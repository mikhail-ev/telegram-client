import ChatsComponent from './components/chats/chats';
import { chatSelectEvent } from './constants/events';
import ChatWindowComponent from './components/chat-window/chat-window';

let instance;

class MessengerModule {
	constructor() {
		if (instance) {
			return instance;
		}
		this.container = null;
		this.content = null;
		this.chats = null;
		this.chatWindow = null;
		instance = this;
	}

	mount(container) {
		var templateId = 'messengerPage';
		var template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;

		this.aside = this.container.querySelector('.messenger__aside');
		this.aside.addEventListener(chatSelectEvent, this.handleChatSelect);

		this.content = this.container.querySelector('.messenger__content');

		this.chats = new ChatsComponent();
		this.chats.mount(this.aside);
	}

	handleChatSelect = (event) => {
		if (!this.chatWindow) {
			this.chatWindow = new ChatWindowComponent();
			this.chatWindow.mount(this.content);
		}
		this.chatWindow.openChat(event.data);
	};

	unmount() {
		this.aside.removeEventListener(chatSelectEvent, this.handleChatSelect);

		this.container.innerHTML = '';
		this.container = null;
	}
}

export default MessengerModule;