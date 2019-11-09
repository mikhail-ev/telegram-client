import {mount as mountInput} from '../common/components/input/input';

function mount(containerId) {
    var templateId = 'messengerPage';
    var template = document.getElementById(templateId);
    var container = document.getElementById(containerId);
    container.innerHTML = '';
    container.innerHTML = template.innerHTML;
    setTimeout(() => {
        mountInput();
    }, 1000);
}

function unmount() {
    console.log('Unmount login');
}

export { mount, unmount };