var instance;

class Overlay {
    constructor() {
        if (instance) {
            return instance;
        }

        this.isMounted = false;
        this.element = null;
        this.onClose = null;
        this.onCloseResolver = null;

        instance = this;
    }

    mount() {
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.addEventListener('click', this.handleClick);
            this.element.classList.add('overlay');
        }
        if (!this.isMounted) {
            document.body.appendChild(this.element);
            this.isMounted = true;
        }
        if (!this.onClose) {
            this.onClose = new Promise((resolve) => this.onCloseResolver = resolve);
        }
        return this.onClose;
    }

    handleClick = () => {
        this.onCloseResolver();
        this.unmount();
    };

    unmount() {
        if (this.isMounted) {
            document.body.removeChild(this.element);
            this.isMounted = false;
            this.onClose = null;
        }
    }
}

instance = new Overlay();

export default Overlay;