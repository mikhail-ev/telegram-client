import {focusFirstInput} from '../../../../utils/dom';
import {applyRipple} from '../../../common/components/ripple/ripple';
import {codeSentEvent} from '../../constants/events';
import {applyNumericInput} from '../../../common/components/numeric-input/numeric-input';
import {Countries} from '../../../common/constants/countries';
import {HtmlDropDownElement} from '../../../../components/inputs-group/html-dropdown-element'
	;

class SignInInfo {
	get fullPhone() {
		return this.country.toString() + this.phone.toString();
	}

	constructor(phone, country, codeHash, codeLength) {
		this.phone = phone;
		this.country = country;
		this.codeHash = codeHash;
		this.codeLength = codeLength;
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
		this.countryDD = null;
		this.countryDDWrapped = null;
	}

	mount(mountContainer) {
		var countries = Countries.map((country) => {
			country.iconClass = `tl__${country.id.toLowerCase()}`;
			return country;
		});

		this.container = mountContainer;

		var templateId = 'signInFormComponent';
		var template = document.getElementById(templateId);
		this.container.innerHTML = template.innerHTML;

		this.button = this.container.querySelector('button');
		applyRipple(this.button);

		this.form = this.container.querySelector('form');
		this.form.addEventListener('submit', this.handleSubmit);

		this.countryDD = this.container.querySelector('#countryDd');
		this.countryDDWrapped = new HtmlDropDownElement(this.countryDD, {onSelectFn: (value) => console.log(value)});
		this.countryDDWrapped.setData(countries);
		//	applyNumericInput(this.countryInput);
		this.phoneInput = this.container.querySelector('#phoneNumberInput');
		applyNumericInput(this.phoneInput);

		if (this.signInInfo) {
			this.phoneInput.value = this.signInInfo.phone || '';
			// this.countryInput.value = this.signInInfo.country || '';
		}

		focusFirstInput(this.container);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.isLoading) {
			return;
		}
		this.isLoading = true;
		var country = this.countryInput.value.toString();
		var phone = this.phoneInput.value.toString();
		MtpApiManager.invokeApi('auth.sendCode', {
			flags: 0,
			phone_number: country + phone,
			api_id: Config.App.id,
			api_hash: Config.App.hash,
			lang_code: navigator.language || 'en'
		}, {
			dcID: 2,
			createNetworker: true
		}).then((result) => { // {phone_code_hash, type: { length }}
			var componentEvent = new Event(codeSentEvent);
			componentEvent.data = new SignInInfo(phone, country, result.phone_code_hash, result.type.length);
			this.container.dispatchEvent(componentEvent);
		}, () => {
			this.isLoading = false;
		});
	};

	unmount() {
		this.button = null;
		this.form.removeEventListener('submit', this.handleSubmit);
		this.form = null;
		this.container.innerHTML = '';
		this.container = null;
		this.countryDDWrapped.destroy();
	}
}

export default SignInFormComponent;
