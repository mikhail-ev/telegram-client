import { focusFirstInput } from '../../../../utils/dom';
import { changePhoneEvent, codeConfirmedEvent } from '../../constants/events';
import { phoneToString } from '../../../../utils/phone';
import { applyNumericInput } from '../../../common/components/numeric-input/numeric-input';

class ConfirmationFormComponent {
    constructor(signInInfo) {
        this.backButton = null;
        this.form = null;
        this.container = null;
        this.input = null;
        this.maxLength = 5;
        this.isLoading = false;
        this.heading = null;
        this.signInInfo = signInInfo;
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

        this.input = this.container.querySelector('#confirmationCodeInput');
        applyNumericInput(this.input);
        this.input.setAttribute('maxlength', this.maxLength);
        this.input.addEventListener('input', this.handleInput);

        this.heading = this.container.querySelector('#confirmationFormHeadingText');
        this.heading.innerText = phoneToString(this.signInInfo.country, this.signInInfo.phone);

        focusFirstInput(this.container);
    }

    handleInput = (event) => {
        var value = event.target.value;
        if (this.isLoading) {
            return;
        }
        if (value && value.length === this.maxLength) {
            this.isLoading = true;
            console.log('sumbmit');
        }
    };

    nextStep = (event) => {
        event.preventDefault();
        this.container.dispatchEvent(new Event(codeConfirmedEvent));
    };

    backStep = () => {
        this.container.dispatchEvent(new Event(changePhoneEvent));
    };

    unmount() {
        this.backButton.removeEventListener('click', this.backStep);
        this.backButton = null;

        this.form.removeEventListener('submit', this.nextStep);
        this.form = null;

        this.container.innerHTML = '';
        this.container = null;

        this.input = null;
    }
}

export default ConfirmationFormComponent;