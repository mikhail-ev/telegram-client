import { backStepEvent, nextStepEvent } from '../../constants/events';
import { focusFirstInput } from '../../../../utils/dom';

class ConfirmationFormComponent {
    constructor() {
        this.backButton = null;
        this.form = null;
        this.container = null;
    }

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'confirmationFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.backButton = this.container.querySelector('button');
        this.backButton.addEventListener('click', this.backStep);

        this.form = this.container.querySelector('form');
        this.form.addEventListener('submit', this.nextStep);

        focusFirstInput(this.container);
    }

    nextStep = (event) => {
        event.preventDefault();
        this.container.dispatchEvent(new Event(nextStepEvent));
    };

    backStep = () => {
        this.container.dispatchEvent(new Event(backStepEvent));
    };

    unmount() {
        this.backButton.removeEventListener('click', this.backStep);
        this.backButton = null;

        this.form.removeEventListener('submit', this.nextStep);
        this.form = null;

        this.container.innerHTML = '';
        this.container = null;
    }
}

export default ConfirmationFormComponent;