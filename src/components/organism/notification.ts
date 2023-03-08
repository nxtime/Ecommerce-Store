import { notificationData } from "../../data/header.js";
import { Button } from "../../utils/buttonElement.js";
import { Container } from "../../utils/container.js";
import { Element } from "../../utils/element.js";
import { Link } from "../../utils/link.js"
import { Modal } from "../templates/modal.js";

export class Notification extends Button {
  constructor() {
    super({
      text: notificationData.label, className: notificationData.className, onClick: () => {
        this.toggleModal();
      }
    })
  }

  toggleModal() {
    Modal.open(this.customModal())
  }

  customModal() {
    const title = new Element({
      element: 'h1',
      content: 'Not found',
      attributes: {
        class: 'text-4xl',
      },
    });

    const container = new Container({
      variant: {
        type: 'flex',
        direction: 'col',
        gap: '2',
        justify: 'center',
        align: 'center',
      },
      children: [
        title,
        new Button({
          text: 'Close',
          onClick: () => {
            Modal.close();
          }
        })
      ]
    });

    return container;
  }
}