import { delegate } from '../../../../utils/dom';
import { userIdAttribute } from '../../constants/attributes';
import { chatSelectEvent } from '../../constants/events';

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

	unmount() {
		this.container.innerHTML = '';
		this.container.removeEventListener('click', this.handleClick);
		this.container = null;
	}
}

export default ChatsComponent;