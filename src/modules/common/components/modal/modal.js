import Overlay from '../overlay/overlay';

class Modal {
    constructor() {
        this.container = null;
        this.overlay = new Overlay();
    }

    mount(template) {
        this.container = document.createElement('div');
        this.container.addEventListener('click', this.handleClick, true);
        this.container.innerHTML = template.innerHTML;
        this.container.classList.add('modal');


        this.overlay.mount().then(() => this.unmount());
        document.body.appendChild(this.container);
        return this.container;
    }

    handleClick = (event) => {
        if (event.target.classList.contains('close-modal')) {
            this.unmount();
        }
    };

    unmount() {
        this.container.removeEventListener('click', this.handleClick);
        document.body.removeChild(this.container);
        this.overlay.unmount();
    }
}

export default Modal;