import { nextStepEvent } from '../../constants/events';
import { focusFirstInput } from '../../../../utils/dom';
import { applyPasswordPreview } from '../../../common/components/password-preview/password-preview';

class PasswordFormComponent {
    constructor() {
        this.nextButton = null;
        this.input = null;
        this.container = null;
        this.form = null;
    }

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'passwordFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.nextButton = this.container.querySelector('button');
        this.nextButton.addEventListener('click', this.nextStep);

        this.input = this.container.querySelector('input');
        applyPasswordPreview(this.input);

        this.form = this.container.querySelector('form');
        this.form.addEventListener('submit', this.nextStep);

        focusFirstInput(this.container);
    }

    nextStep = (event) => {
        event.preventDefault();
        this.container.dispatchEvent(new Event(nextStepEvent));
    };

    unmount() {
        this.nextButton.removeEventListener('click', this.nextStep);
        this.nextButton = null;

        this.form.removeEventListener('submit', this.nextStep);
        this.form = null;

        this.container.innerHTML = '';
        this.container = null;

        this.input = null;
    }
}

export default PasswordFormComponent;