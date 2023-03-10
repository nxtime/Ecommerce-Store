import { Element } from './element.js';

export interface IButtonConstructor {
  text: string;
  onClick?: (event: Event) => void;
  className?: string;
  type?: string;
}

export class Button extends Element {
  constructor(
    {
      onClick,
      text = '',
      className = '',
      type = 'button'
    }: IButtonConstructor
  ) {
    super({
      as: 'button',
      content: `<span>${text}</span>`,
      attr: { type, class: 'btn ' + className },
      events: [{ type: 'click', listener: onClick }]
    });
  }
  updateState(state: any): void {
    this.element.innerHTML = `<span>${state}</span>`;
  }
  onClick(fn: () => void): void {
    this.element.addEventListener('click', fn);
  }
}