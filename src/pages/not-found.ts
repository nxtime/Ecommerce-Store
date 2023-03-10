import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";
import { Link } from "../utils/link.js";

export class NotFound {
  static render() {
    const title = new Element({
      as: 'h1',
      content: 'Not found',
      attr: {
        class: 'text-4xl',
      },
    });

    const container = new Container({
      variant: {
        type: 'flex',
        gap: '2',
        justify: 'center',
        align: 'center',
      },
      children: [title, new Link({
        label: 'Voltar',
        to: '/',
        className: 'btn'
      })]
    });

    return container;
  }
}