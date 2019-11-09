import { nextStepEvent, backStepEvent } from '../../constants/events';

class PasswordFormComponent {
    constructor() {
        this.backButton = null;
        this.nextButton = null;
        this.container = null;
    }

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'passwordFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.backButton = this.container.querySelectorAll('button')[0];
        this.nextButton = this.container.querySelectorAll('button')[1];
        this.backButton.addEventListener('click', this.backStep);
        this.nextButton.addEventListener('click', this.nextStep);
    }

    nextStep = () => {
        this.container.dispatchEvent(new Event(nextStepEvent));
    };

    backStep = () => {
        this.container.dispatchEvent(new Event(backStepEvent));
    };

    unmount() {
        this.backButton.removeEventListener('click', this.backStep);
        this.nextButton.removeEventListener('click', this.nextStep);

        this.backButton = null;
        this.nextButton = null;

        this.container.innerHTML = '';
        this.container = null;
    }
}

export default PasswordFormComponent;