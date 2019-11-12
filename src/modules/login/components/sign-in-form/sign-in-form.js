import { focusFirstInput } from '../../../../utils/dom';
import { applyRipple } from '../../../common/components/ripple/ripple';
import { codeSentEvent } from '../../constants/events';
import { applyNumericInput } from '../../../common/components/numeric-input/numeric-input';

class SignInInfo {
    constructor(phone, country, codeHash) {
        this.phone = phone;
        this.country = country;
        this.codeHash = codeHash;
    }
}

class SignInFormComponent {
	constructor(signInInfo) {
        this.signInInfo = signInInfo;
        this.isLoading = false;
		this.button = null;
		this.container = null;
		this.form = null;
        this.phoneInput = null;
        this.countryInputEl = null;
		this.phoneNumberInputEl = null;

		this.countryInputWrapped = null;
		this.phoneNumberInputWrapped = null;
	}

    mount(mountContainer) {
        this.container = mountContainer;

        var templateId = 'signInFormComponent';
        var template = document.getElementById(templateId);
        this.container.innerHTML = template.innerHTML;

        this.button = this.container.querySelector('button');
        applyRipple(this.button);

        this.form = this.container.querySelector('form');
        this.form.addEventListener('submit', this.handleSubmit);

        this.phoneInput = this.container.querySelector('#phoneNumberInput');
        applyNumericInput(this.phoneInput);

        if (this.signInInfo) {
            this.phoneInput.value = this.signInInfo.phone || '';
        }

        this.countryInputEl = this.form.querySelector('#countryInput');
        this.phoneNumberInputEl = this.form.querySelector('#phoneNumberInput');

        this.countryInputWrapped = new HtmlInputElement(this.countryInputEl);
        this.phoneNumberInputWrapped = new HtmlInputElement(this.phoneNumberInputEl);
        focusFirstInput(this.container);
	}

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        var componentEvent = new Event(codeSentEvent);
        var codeHash = 'dasddasd';
        componentEvent.data = new SignInInfo(this.phoneInput.value, '7', codeHash);
        this.container.dispatchEvent(componentEvent);
        // window.MtpApiManager.invokeApi('auth.sendCode', {
        //     flags: 0,
        //     phone_number: this.phoneInput.value,
        //     api_id: Config.App.id,
        //     api_hash: Config.App.hash,
        //     lang_code: navigator.language || 'en'
        //     /* TODO take nearest DC */
        // }, { dcID: 2, createNetworker: true }).then((result) => {
        //     console.warn('2 >>>>>', result); // { phone_code_hash }
        //     this.isLoading = false;
        //     var codeHashEvent = new Event(setCodeHashEvent);
        //     codeHashEvent.data = result.phone_code_hash;
        //     this.container.dispatchEvent(codeHashEvent);
        //     this.container.dispatchEvent(new Event(nextStepEvent));
        // }, () => {
        //     // TODO error handling
        // });
    };

	unmount() {
		this.button = null;
		this.form.removeEventListener('submit', this.nextStep);
		this.form = null;
		this.container.innerHTML = '';
		this.container = null;
        this.countryInputWrapped.destroy();
        this.phoneNumberInputWrapped.destroy();
	}
}

export default SignInFormComponent;
