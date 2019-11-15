import { focusFirstInput } from '../../../../utils/dom';
import { applyRipple } from '../../../common/components/ripple/ripple';
import { codeSentEvent } from '../../constants/events';
import { applyNumericInput } from '../../../common/components/numeric-input/numeric-input';
import { Countries } from '../../../common/constants/countries';
import { HtmlDropDownElement } from '../../../../components/inputs-group/html-dropdown-element'
	;
import { getNearestDC, sendCode } from '../../../../utils/telegram';

class SignInInfo {
	get fullPhone() {
		return this.country.toString() + this.phone.toString();
	}

	constructor(phone, country, codeHash, codeLength, phoneRegistered) {
		this.phone = phone;
		this.country = country;
		this.codeHash = codeHash;
		this.codeLength = codeLength;
		this.phoneRegistered = phoneRegistered;
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
		this.countryCode = null;
		this.countryCodeOutput = null;
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

		this.countryCodeOutput = this.container.querySelector('.sign-in-form__country-code');

		this.countryDD = this.container.querySelector('#countryDd');
		this.countryDDWrapped = new HtmlDropDownElement(this.countryDD,
			{ onSelectFn: this.handleCountrySelect });
		this.countryDDWrapped.setData(countries);

		this.phoneInput = this.container.querySelector('#phoneNumberInput');
		applyNumericInput(this.phoneInput);

		if (this.signInInfo) {
			this.phoneInput.value = this.signInInfo.phone;
			this.setCountryCode(this.signInInfo.country);
		}

		this.getNearestDC();
	}

	handleCountrySelect = (country) => {
		let countryCode = country.phoneCode.slice(1, country.phoneCode.length);
		this.setCountryCode(countryCode);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.isLoading) {
			return;
		}
		this.isLoading = true;

		var phone = this.phoneInput.value.toString();
		var country = this.countryCode.toString();
		sendCode(country + phone).then((result) => {
			console.log(result);
			var componentEvent = new Event(codeSentEvent);
			var registered = result.pFlags && !!result.pFlags.phone_registered;
			componentEvent.data = new SignInInfo(
				phone, country, result.phone_code_hash, result.type.length, registered);
			this.container.dispatchEvent(componentEvent);
		}, () => {
			this.isLoading = false;
		});
	};

	setCountryCode(code) {
		this.countryCode = code;
		this.countryCodeOutput.innerText = '+' + code;
		var rect = this.countryCodeOutput.getBoundingClientRect();
		this.phoneInput.style.paddingLeft = (rect.width + 15) + 'px';
		if (!this.phoneInput.classList.contains('active')) {
			this.phoneInput.classList.add('active');
			this.phoneInput.focus();
		}
	}

	getNearestDC() {
		getNearestDC().then((response) => console.warn(response));
	}

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
