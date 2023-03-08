import { Container } from "../../utils/container.js";
import { Element } from "../../utils/element";

export class Modal {
  static state = {
    isOpen: false,
  }
  static modalRoot = document.querySelector("#modal") as HTMLDivElement;

  static open(content: Element) {
    this.state.isOpen = true;
    this.modalRoot.classList.add("open");
    this.render(content);
  }

  static close() {
    this.state.isOpen = false;
    this.modalRoot.classList.remove("open");
    this.modalRoot.innerHTML = '';
  }

  static render(content?: Element) {
    // if (this.state.isOpen) return this.close();
    const modal = new Container({
      variant: {
        type: 'flex',
        gap: '2',
        justify: 'center',
        align: 'center',
      },
      className: 'modal',
      children: [content]
    });

    console.log(this.modalRoot);

    this.modalRoot.appendChild(modal.element);
  }
}