class ChatWindowComponent {
	constructor() {
		this.container = null;
	}

	mount(container) {
		var templateId = 'chatWindowComponent';
		var template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;
	}

	openChat(userId) {
		this.container.querySelector('span').innerText = userId;
	}

	unmount() {
		this.container.innerHTML = null;
		this.container = null;
	}
}

export default ChatWindowComponent;