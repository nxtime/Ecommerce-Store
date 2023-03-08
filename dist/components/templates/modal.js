import { Container } from "../../utils/container.js";
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.open = function (content) {
        this.state.isOpen = true;
        this.modalRoot.classList.add("open");
        this.render(content);
    };
    Modal.close = function () {
        this.state.isOpen = false;
        this.modalRoot.classList.remove("open");
        this.modalRoot.innerHTML = '';
    };
    Modal.render = function (content) {
        // if (this.state.isOpen) return this.close();
        var modal = new Container({
            variant: {
                type: 'flex',
                gap: '2',
                justify: 'center',
                align: 'center'
            },
            className: 'modal',
            children: [content]
        });
        console.log(this.modalRoot);
        this.modalRoot.appendChild(modal.element);
    };
    Modal.state = {
        isOpen: false
    };
    Modal.modalRoot = document.querySelector("#modal");
    return Modal;
}());
export { Modal };
