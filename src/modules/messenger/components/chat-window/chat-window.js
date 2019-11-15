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

	openChat(peerId, peerType) {
		this.container.querySelector('span').innerText = peerId + '/' + peerType;
	}

	unmount() {
		this.container.innerHTML = null;
		this.container = null;
	}
}

export default ChatWindowComponent;