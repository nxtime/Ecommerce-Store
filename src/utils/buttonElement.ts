import { Element } from './element.js';

export interface IButtonConstructor {
  text: string;
  onClick?: () => void;
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
      element: 'button',
      content: `<span>${text}</span>`,
      attributes: { type, class: 'btn ' + className },
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