import SignInFormComponent from './components/sign-in-form/sign-in-form';
import PasswordFormComponent from './components/password-form/password-form';
import DetailsFormComponent from './components/details-form/details-form';
import ConfirmationFormComponent from './components/confirmation-form/confirmation-form';
import { nextStepEvent, backStepEvent } from './constants/events';

class LoginModule {
    constructor() {
        this.container = null;
        this.innerContainer = null;
        this.forms = [
            new SignInFormComponent(),
            new PasswordFormComponent(),
            new DetailsFormComponent(),
            new ConfirmationFormComponent()];
        this.activeFormIndex = 0;
    }

    mount(container) {
        this.container = container;

        var templateId = 'loginPage';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.innerContainer = container.querySelector('.login-page');

        this.container.addEventListener(nextStepEvent, this.nextStep, true);
        this.container.addEventListener(backStepEvent, this.backStep, true);

        this.forms[this.activeFormIndex].mount(this.innerContainer);
    }

    unmount() {
        this.forms[this.activeFormIndex].unmount();

        this.container.removeEventListener(nextStepEvent, this.nextStep);
        this.container.removeEventListener(backStepEvent, this.backStep);

        this.container = null;
        this.innerContainer = null;
        this.activeFormIndex = 0;
    }

    nextStep = () => {
        if (this.forms[this.activeFormIndex + 1]) {
            this.forms[this.activeFormIndex].unmount();
            this.forms[++this.activeFormIndex].mount(this.innerContainer);
        }
        console.log('next step');
    };

    backStep = () => {
        if (this.forms[this.activeFormIndex - 1]) {
            this.forms[this.activeFormIndex].unmount();
            this.forms[--this.activeFormIndex].mount(this.innerContainer);
        }
        console.log('previous step');
    };
}

var instance = new LoginModule();

export default instance;