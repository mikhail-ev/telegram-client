import Modal from '../../../common/components/modal/modal';
import { focusFirstInput } from '../../../../utils/dom';
import { applyRipple } from '../../../common/components/ripple/ripple';
import { codeConfirmedEvent, detailsSetEvent } from '../../constants/events';

class DetailsInfo {
	constructor(userId) {
		this.userId = userId;
	}
}

class DetailsFormComponent {
	constructor(signInInfo, confirmationInfo) {
		this.confirmationInfo = confirmationInfo;
		this.signInInfo = signInInfo;
		this.nameInput = null;
		this.lastNameInput = null;
		this.nextButton = null;
		this.photoPlaceholder = null;
		this.container = null;
		this.form = null;
		this.isLoading = false;
	}

	mount(mountContainer) {
		this.container = mountContainer;

		var templateId = 'detailsFormComponent';
		var template = document.getElementById(templateId);
		this.container.innerHTML = template.innerHTML;

		this.nextButton = this.container.querySelector('button');
		this.nextButton.addEventListener('click', this.nextStep);
		applyRipple(this.nextButton);

		this.photoPlaceholder = this.container.querySelector('img.details-form-photo-placeholder');
		this.photoPlaceholder.addEventListener('click', this.openModal);

		this.nameInput = this.container.querySelector('#detailsNameInput');
		this.lastNameInput = this.container.querySelector('#detailsLastNameInput');

		this.form = this.container.querySelector('form');
		this.form.addEventListener('submit', this.nextStep);

		focusFirstInput(this.container);
	}

	nextStep = (event) => {
		event.preventDefault();
		if (this.isLoading) {
			return;
		}
		this.isLoading = true;
		MtpApiManager.invokeApi('auth.signUp', {
			phone_number: this.signInInfo.fullPhone,
			phone_code_hash: this.signInInfo.codeHash,
			phone_code: this.confirmationInfo.code,
			first_name: this.nameInput.value,
			last_name: this.lastNameInput.value
		}, {
			dcID: 2,
			createNetworker: true
		}).then((result) => {
			console.log(result);
			var componentEvent = new Event(detailsSetEvent);
			componentEvent.data = new DetailsInfo(result.user.id);
			this.container.dispatchEvent(componentEvent);
		}, (e) => {
			console.log(e);
			this.isLoading = false;
		});
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