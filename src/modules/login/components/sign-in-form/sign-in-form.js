import { nextStepEvent, setCodeHashEvent } from '../../constants/events';
import { focusFirstInput } from '../../../../utils/dom';
import { applyRipple } from '../../../common/components/ripple/ripple';

class SignInFormComponent {
	constructor() {
		this.button = null;
		this.container = null;
		this.form = null;
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
		var codeHashEvent = new Event(setCodeHashEvent);
		codeHashEvent.data = 'fsdfsdFSDFSDFsdfsd';
		this.container.dispatchEvent(codeHashEvent);
		this.container.dispatchEvent(new Event(nextStepEvent));
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
