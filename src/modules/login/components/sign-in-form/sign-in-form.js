import { nextStepEvent } from '../../constants/events';
import { focusFirstInput } from '../../../../utils/dom';

class SignInFormComponent {
    constructor() {
        this.button = null;
        this.container = null;
        this.form = null;
    }

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'signInFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.button = this.container.querySelector('button');
        this.button.addEventListener('click', this.nextStep);

        this.form = this.container.querySelector('form');
        this.form.addEventListener('submit', this.nextStep);

        focusFirstInput(this.container);
    }

    nextStep = (event) => {
        event.preventDefault();
        this.container.dispatchEvent(new Event(nextStepEvent));
    };

    unmount() {
        this.button.removeEventListener('click', this.nextStepHandler);
        this.button = null;

        this.form.removeEventListener('submit', this.nextStep);
        this.form = null;

        this.container.innerHTML = '';
        this.container = null;
    }
}

export default SignInFormComponent;