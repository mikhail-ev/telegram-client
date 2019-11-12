import SignInFormComponent from './components/sign-in-form/sign-in-form';
import PasswordFormComponent from './components/password-form/password-form';
import DetailsFormComponent from './components/details-form/details-form';
import ConfirmationFormComponent from './components/confirmation-form/confirmation-form';
import { nextStepEvent, backStepEvent, setCodeHashEvent } from './constants/events';

class LoginModule {
    constructor() {
        this.container = null;
        this.innerContainer = null;
        this.forms = [
            new SignInFormComponent(),
            new ConfirmationFormComponent(),
            new PasswordFormComponent(),
            new DetailsFormComponent(),
        ]
        this.activeFormIndex = 0;
    }

    mount(container) {
        this.container = container;

        var templateId = 'loginPage';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.innerContainer = container.querySelector('.login-page');

        this.container.addEventListener(nextStepEvent, this.handleNextStep, true);
        this.container.addEventListener(backStepEvent, this.handleBackStep, true);
        this.container.addEventListener(setCodeHashEvent, this.handleCodeHashSet, true);

        this.forms[this.activeFormIndex].mount(this.innerContainer);
    }

    unmount() {
        this.forms[this.activeFormIndex].unmount();

        this.container.removeEventListener(nextStepEvent, this.handleNextStep);
        this.container.removeEventListener(backStepEvent, this.handleBackStep);
        this.container.removeEventListener(setCodeHashEvent, this.handleCodeHashSet);

        this.container = null;
        this.innerContainer = null;
        this.activeFormIndex = 0;
    }

    handleNextStep = () => {
        if (this.forms[this.activeFormIndex + 1]) {
            this.forms[this.activeFormIndex].unmount();
            this.forms[++this.activeFormIndex].mount(this.innerContainer);
        }
        console.log('next step');
    };

    handleBackStep = () => {
        if (this.forms[this.activeFormIndex - 1]) {
            this.forms[this.activeFormIndex].unmount();
            this.forms[--this.activeFormIndex].mount(this.innerContainer);
        }
        console.log('previous step');
    };

    handleCodeHashSet = (event) => {
        console.log('hash set!', event.data);
    }
}

var instance = new LoginModule();

export default instance;