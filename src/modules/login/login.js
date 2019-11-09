import { mount as mountSignIn } from './components/sign-in-form/sign-in-form';

function mount(container) {
    var templateId = 'loginPage';
    var template = document.getElementById(templateId);
    container.innerHTML = template.innerHTML;
    mountSignIn(container.querySelectorAll('.login-page')[0]);
}

function unmount() {
    console.log('Unmount login');
}

export { mount, unmount };