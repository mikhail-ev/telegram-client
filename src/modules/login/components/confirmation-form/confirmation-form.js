import { focusFirstInput } from '../../../../utils/dom';
import { changePhoneEvent, codeConfirmedEvent } from '../../constants/events';
import { phoneToString } from '../../../../utils/phone';
import { applyNumericInput } from '../../../common/components/numeric-input/numeric-input';

class ConfirmationInfo {
	constructor(code, passwordNeeded) {
		this.code = code;
		this.passwordNeeded = passwordNeeded;
	}
}

class ConfirmationFormComponent {
    constructor(signInInfo) {
        this.backButton = null;
        this.form = null;
        this.container = null;
        this.input = null;
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
        this.input.setAttribute('maxlength', this.signInInfo.codeLength);
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
        var componentEvent = new Event(codeConfirmedEvent);
        componentEvent.data = new ConfirmationInfo(value);
        if (value && value.length === this.signInInfo.codeLength) {
            this.isLoading = true;
            MtpApiManager.invokeApi('auth.signIn', {
                phone_number: this.signInInfo.fullPhone,
                phone_code_hash: this.signInInfo.codeHash,
                phone_code: value
            }, {
                dcID: 2,
                createNetworker: true
            }).then((result) => { // "{"_":"auth.authorization","pFlags":{},"flags":0,"user":{"_":"user","pFlags":{"self":true,"contact":true},"flags":3159,"id":696018,"access_hash":"11134724570702625712","first_name":"Mikhail","last_name":"mmm","phone":"48730887261","status":{"_":"userStatusOffline","was_online":1572983061}}}"
            	console.log(result);
                this.container.dispatchEvent(componentEvent);
            }, (error) => {
            	console.error(error);
            	if (error.type === 'PHONE_NUMBER_UNOCCUPIED') {
					this.container.dispatchEvent(componentEvent);
				}
            	if (error.type === 'SESSION_PASSWORD_NEEDED') {
					componentEvent.data.passwordNeeded = true;
					this.container.dispatchEvent(componentEvent);
				}
                this.isLoading = false;
            });
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