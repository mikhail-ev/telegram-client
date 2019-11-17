import {addClass, focusFirstInput, hideElement, removeClass, showElement} from '../../../../utils/dom';
import { applyPasswordPreview } from '../../../common/components/password-preview/password-preview';
import { applyRipple } from '../../../common/components/ripple/ripple';
import { passwordConfirmedEvent } from '../../constants/events';
import { makePasswordHash } from '../../../../utils/telegram';
import {serverErrors} from '../../../common/constants/server-errors';

class PasswordFormComponent {
	constructor() {
		this.nextButton = null;
		this.input = null;
		this.label = null;
		this.container = null;
		this.form = null;
		this.twoFactorSetupMonkeyClose = null;
		this.twoFactorSetupMonkeyPeek = null;
	}

	mount(mountContainer) {
		this.container = mountContainer;

		var templateId = 'passwordFormComponent';
		var template = document.getElementById(templateId);
		this.container.innerHTML = template.innerHTML;
		this.twoFactorSetupMonkeyClose = this.container.querySelector('#twoFactorSetupMonkeyClose');
		this.twoFactorSetupMonkeyPeek = this.container.querySelector('#twoFactorSetupMonkeyPeek');
		this.nextButton = this.container.querySelector('button');
		this.nextButton.addEventListener('click', this.nextStep);
		applyRipple(this.nextButton);

		this.input = this.container.querySelector('input');
		this.label = this.container.querySelector('label');
		this.input.addEventListener('input', this.handleInput);

		applyPasswordPreview(this.input, (value) => {
			if (value) {
				hideElement(this.twoFactorSetupMonkeyClose);
				showElement(this.twoFactorSetupMonkeyPeek);
			} else {
				hideElement(this.twoFactorSetupMonkeyPeek);
				showElement(this.twoFactorSetupMonkeyClose);
			}
		});

		this.form = this.container.querySelector('form');
		this.form.addEventListener('submit', this.nextStep);

		focusFirstInput(this.container);
	}

	handleInput = (event) => {
		this.label.innerText = 'Password';
		removeClass(this.input, 'tl-input_border-red');
		removeClass(this.label, 'tl-label_text-red');
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
			this.handleGetPasswordErrors(error);
		});
	};

	handleGetPasswordErrors = (error, componentEvent) => {
		switch (error.type) {
			case serverErrors.checkPassword.PASSWORD_HASH_INVALID:
				addClass(this.input, 'tl-input_border-red');
				addClass(this.label, 'tl-label_text-red');
				this.label.innerText = 'Invalid Password';
				this.isLoading = false;
				break;
			default:
				console.warn('Unhandled error: ', error.type);
		}
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
