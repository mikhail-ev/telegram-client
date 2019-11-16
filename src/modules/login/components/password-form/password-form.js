import { focusFirstInput } from '../../../../utils/dom';
import { applyPasswordPreview } from '../../../common/components/password-preview/password-preview';
import { applyRipple } from '../../../common/components/ripple/ripple';
import { passwordConfirmedEvent } from '../../constants/events';
import { makePasswordHash } from '../../../../utils/telegram';

class PasswordFormComponent {
	constructor() {
		this.nextButton = null;
		this.input = null;
		this.container = null;
		this.form = null;
	}

	mount(mountContainer) {
		this.container = mountContainer;

		var templateId = 'passwordFormComponent';
		var template = document.getElementById(templateId);
		this.container.innerHTML = template.innerHTML;

		this.nextButton = this.container.querySelector('button');
		this.nextButton.addEventListener('click', this.nextStep);
		applyRipple(this.nextButton);

		this.input = this.container.querySelector('input');
		applyPasswordPreview(this.input);

		this.form = this.container.querySelector('form');
		this.form.addEventListener('submit', this.nextStep);

		focusFirstInput(this.container);
	}

	nextStep = (event) => {
		event.preventDefault();
		console.log('submit', this.input.value);
		var password = this.input.value;
		MtpApiManager.invokeApi('account.getPassword', {}, {
			dcID: 2, createNetworker: true
		}).then((state) => {
			console.log(state);
			return makePasswordHash(state.current_salt, password);
		}).then((passwordHash) => {
			return MtpApiManager.invokeApi('auth.checkPassword', {
				password_hash: passwordHash
			}, { dcID: 2, createNetworker: true })
		}).then(() => {
			// MtpApiManager.setUserAuth(2, {
			// 	id: result.user.id
			// });
			this.container.dispatchEvent(new Event(passwordConfirmedEvent));
		}).catch((error) => {
			console.error(error);
		});
	};

	unmount() {
		this.nextButton.removeEventListener('click', this.nextStep);
		this.nextButton = null;

		this.form.removeEventListener('submit', this.nextStep);
		this.form = null;

		this.container.innerHTML = '';
		this.container = null;

		this.input = null;
	}
}

export default PasswordFormComponent;