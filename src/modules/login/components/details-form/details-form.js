import { nextStepEvent } from '../../constants/events';

class DetailsFormComponent {
    constructor() {
        this.nextButton = null;
        this.container = null;
        this.form = null;
    }

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'detailsFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.nextButton = this.container.querySelector('button');
        this.nextButton.addEventListener('click', this.nextStep);

        this.form = this.container.querySelector('form');
        this.form.addEventListener('submit', this.nextStep);
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
    }
}

export default DetailsFormComponent;