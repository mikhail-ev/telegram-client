import {mount as mountForm} from './components/form/form';
import {mount as mountInput} from '../common/components/input/input';

function mount(containerId) {
    var templateId = 'loginPage';
    var template = document.getElementById(templateId);
    var container = document.getElementById(containerId);
    container.innerHTML = '';
    container.innerHTML = template.innerHTML;
    setTimeout(() => {
        mountForm();
        mountInput();
    }, 1000);
}

function unmount() {
    console.log('Unmount login');
}

export { mount, unmount };