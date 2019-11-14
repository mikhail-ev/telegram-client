let instance;

class DebugModule {
	constructor() {
		if (instance) {
			return instance;
		}
		this.container = null;
		instance = this;
	}

	mount(container) {
		var templateId = 'debugPage';
		var template = document.getElementById(templateId);
		this.container = container;
		this.container.innerHTML = template.innerHTML;

		var deleteButton = document.getElementById('deleteAccountButton');
		deleteButton.addEventListener('click', () => {
			MtpApiManager.invokeApi('account.deleteAccount', {
				reason: 'testing'
			}, {
				dcID: 2,
				createNetworker: true
			}).then((result) => {
				console.warn(result);
			}, (e) => console.warn(e));
		});

		var logOutButton = document.getElementById('logOutButton');
		logOutButton.addEventListener('click', () => {
			MtpApiManager.invokeApi('auth.logOut', {}, {
				dcID: 2,
				createNetworker: true
			}).then((result) => {
				console.warn(result);
			}, (e) => console.warn(e));
		});

		var getChatsButton = document.getElementById('getChatsButton');
		getChatsButton.addEventListener('click', () => {
			MtpApiManager.invokeApi('messages.getAllChats', {
				except_ids: []
			}, {
				dcID: 2,
				createNetworker: true
			}).then((result) => {
				console.warn(result);
			}, (e) => console.warn(e));
		});

		var getDialogsButton = document.getElementById('getDialogsButton');
		getDialogsButton.addEventListener('click', () => {
			MtpApiManager.invokeApi('messages.getDialogs', {
				flags: 0,
				offset_date: 0,
				offset_id: 0,
				offset_peer: {"_": "inputPeerEmpty"},
				limit: 20
			}, {
				timeout: 300,
				dcID: 2,
				createNetworker: true
			}).then((result) => {
				console.warn(result);
			}, (e) => console.warn(e));
		});
	}

	unmount() {
		this.container.innerHTML = '';
		this.container = null;
	}
}

export default DebugModule;