import SignInFormComponent from './components/sign-in-form/sign-in-form';
import ConfirmationFormComponent from './components/confirmation-form/confirmation-form';
import { changePhoneEvent, codeConfirmedEvent, codeSentEvent, detailsSetEvent } from './constants/events';
import DetailsFormComponent from './components/details-form/details-form';

let instance;

class LoginModule {
	constructor() {
		if (instance) {
			return instance;
		}
		this.container = null;
		this.innerContainer = null;
		this.activeView = null;
		this.signInInfo = null;
		instance = this;
	}

	mount(container) {
		this.container = container;

		var templateId = 'loginPage';
		var template = document.getElementById(templateId);
		this.container.innerHTML = template.innerHTML;

		this.innerContainer = container.querySelector('.login-page');

		this.container.addEventListener(codeSentEvent, this.handleSentCode, true);
		this.container.addEventListener(changePhoneEvent, this.handleChangePhone, true);
		this.container.addEventListener(codeConfirmedEvent, this.handleConfirmedCode, true);
		this.container.addEventListener(detailsSetEvent, this.handleDetailsSet, true);

		this.activeView = new SignInFormComponent();
		this.activeView.mount(this.innerContainer);
	}

	unmount() {
		this.container.removeEventListener(codeSentEvent, this.handleSentCode);
		this.container.removeEventListener(changePhoneEvent, this.handleChangePhone);
		this.container.removeEventListener(codeConfirmedEvent, this.handleConfirmedCode);
		this.container.removeEventListener(detailsSetEvent, this.handleDetailsSet, true);
		this.activeView.unmount();
		this.innerContainer = null;
		this.activeView = null;
		this.signInInfo = null;
		this.container.innerHTML = '';
		this.container = null;
	}

	handleDetailsSet = (event) => {
		console.warn(event);
		this.redirectToMessenger();
	};

	handleSentCode = (event) => {
		console.warn(event);
		this.signInInfo = event.data;
		this.activeView.unmount();
		this.activeView = new ConfirmationFormComponent(this.signInInfo);
		this.activeView.mount(this.innerContainer);
	};

	handleChangePhone = () => {
		this.activeView.unmount();
		this.activeView = new SignInFormComponent(this.signInInfo);
		this.activeView.mount(this.innerContainer);
	};

	handleConfirmedCode = (event) => {
		console.warn(event);
		if (this.signInInfo.phoneRegistered) {
			this.redirectToMessenger();
		} else {
			this.activeView.unmount();
			this.activeView = new DetailsFormComponent(this.signInInfo, event.data);
			this.activeView.mount(this.innerContainer);
		}
	};

	redirectToMessenger() {
		localStorage.setItem('ui_authorized_flag', '1');
		location.replace('/#');
	}
}

export default LoginModule;
