import { IPaths } from '../interfaces/index.js';
import { Router } from '../routes/index.js';
import { Element } from './element.js';

export interface ILinkConstructor {
  label: string;
  className?: string;
  to?: IPaths;
  onClick?: (e: Event) => void;
}

export class Link extends Element {
  constructor(
    {
      label = '',
      className = '',
      to = '/',
      onClick
    }: ILinkConstructor
  ) {
    super({
      element: 'a',
      content: label,
      attributes: { href: to, class: className },
      events: [{
        type: 'click', listener: (e) => {
          e.preventDefault();
          Router.navigate(to)

          if (onClick) onClick(e);
        }
      }]
    });
  }
}