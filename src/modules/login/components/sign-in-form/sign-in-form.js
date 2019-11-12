import {nextStepEvent} from '../../constants/events';
import {focusFirstInput} from '../../../../utils/dom';
import {applyRipple} from '../../../common/components/ripple/ripple';
import {HtmlInputElement} from '../../../../components/inputs-group/html-input-element';

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
		this.button.addEventListener('click', this.nextStep);
		applyRipple(this.button);

		this.form = this.container.querySelector('form');
		this.form.addEventListener('submit', this.nextStep);

		this.countryInputEl = this.form.querySelector('#countryInput');
		this.phoneNumberInputEl = this.form.querySelector('#phoneNumberInput');

		this.countryInputWrapped = new HtmlInputElement(this.countryInputEl);
		this.phoneNumberInputWrapped = new HtmlInputElement(this.phoneNumberInputEl);
		focusFirstInput(this.container);
	}

	nextStep = (event) => {
		event.preventDefault();
		this.container.dispatchEvent(new Event(nextStepEvent));
	};

	unmount() {
		this.button.removeEventListener('click', this.nextStepHandler);
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
