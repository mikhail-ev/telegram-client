let instance;

class MessengerModule {
	constructor() {
		if (instance) {
			return instance;
		}
		this.container = null;
		instance = this;
	}

	mount(container) {
		var templateId = 'messengerPage';
		var template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;
	}

	unmount() {
		this.container.innerHTML = '';
		this.container = null;
	}
}

export default MessengerModule;