function mount(container) {
    var templateId = 'messengerPage';
    var template = document.getElementById(templateId);
    container.innerHTML = template.innerHTML;
}

function unmount() {
    console.log('Unmount login');
}

export { mount, unmount };