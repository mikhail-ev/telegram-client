import SignInFormComponent from './components/sign-in-form/sign-in-form';
import ConfirmationFormComponent from './components/confirmation-form/confirmation-form';
import { changePhoneEvent, codeConfirmedEvent, codeSentEvent } from './constants/events';

class LoginModule {
    constructor() {
        this.container = null;
        this.innerContainer = null;
        this.activeView = null;
        this.signInInfo = null;
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

        this.activeView = new SignInFormComponent();
        this.activeView.mount(this.innerContainer);
    }

    unmount() {
        this.container.removeEventListener(codeSentEvent, this.handleSentCode);
        this.container.removeEventListener(changePhoneEvent, this.handleChangePhone);
        this.container.removeEventListener(codeConfirmedEvent, this.handleConfirmedCode);
        this.container = null;
        this.innerContainer = null;
        this.activeView = null;
        this.signInInfo = null;
    }

    handleSentCode = (event) => {
        console.log('code hash', event.data);
        this.signInInfo = event.data;
        this.activeView.unmount();
        this.activeView = new ConfirmationFormComponent(this.signInInfo);
        this.activeView.mount(this.innerContainer);
    };

    handleChangePhone = (event) => {
        this.activeView.unmount();
        this.activeView = new SignInFormComponent(this.signInInfo);
        this.activeView.mount(this.innerContainer);
    };

    handleConfirmedCode = () => {
        console.log('confirmed!');
        location.replace('/#');
    }
}

var instance = new LoginModule();

export default instance;