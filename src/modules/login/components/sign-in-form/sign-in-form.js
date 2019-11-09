import { nextStepEvent } from '../../constants/events';

class SignInFormComponent {
    constructor() {
        this.button = null;
        this.container = null;
        this.nextStepHandler = null;
    }

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'signInFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.button = this.container.querySelector('button');
        this.button.addEventListener('click', this.nextStepHandler = this.nextStep.bind(this));
    }

    nextStep = () => {
        this.container.dispatchEvent(new Event(nextStepEvent));
    };

    unmount() {
        this.button.removeEventListener('click', this.nextStepHandler);
        this.button = null;

        this.container.innerHTML = '';
        this.container = null;
    }
}

export default SignInFormComponent;