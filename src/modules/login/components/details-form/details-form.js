import { nextStepEvent } from '../../constants/events';
import Modal from '../../../common/components/modal/modal';
import { focusFirstInput } from '../../../../utils/dom';

class DetailsFormComponent {
    constructor() {
        this.nextButton = null;
        this.photoPlaceholder = null;
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

        this.photoPlaceholder = this.container.querySelector('img.details-form-photo-placeholder');
        this.photoPlaceholder.addEventListener('click', this.openModal)

        this.form = this.container.querySelector('form');
        this.form.addEventListener('submit', this.nextStep);

        focusFirstInput(this.container);
    }

    nextStep = (event) => {
        event.preventDefault();
        this.container.dispatchEvent(new Event(nextStepEvent));
    };

    openModal = () => {
        var modal = new Modal();
        var templateId = 'detailsFormComponentModal';
        var template = document.getElementById(templateId);
        modal.mount(template);
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