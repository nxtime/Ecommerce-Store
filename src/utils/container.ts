import { Element } from './element.js';

export interface IContainerConstructor {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article' | 'aside' | 'ul' | 'li',
  variant?: {
    type?: 'flex' | 'grid';
    direction?: 'row' | 'col';
    justify?: 'center' | 'start' | 'end' | 'between' | 'evenly' | 'around';
    align?: 'center' | 'start' | 'end';
    gap?: string;
  };
  attr?: any;
  className?: string;
  children?: Element[];
}

const styles = (className: string, variant: IContainerConstructor['variant']) => {
  if (variant.type === 'flex') className = `${className} flex ${variant.direction === 'col' ? 'flex-col' : ''}`;

  if (variant.type === 'grid') className = `${className} grid grid-${variant.direction}`;

  if (variant.justify) className += ` justify-${variant.justify}`;

  if (variant.align) className += ` align-${variant.align}`;

  if (variant.gap) className += ` gap-${variant.gap}`;

  return className
}

export class Container extends Element {
  constructor(
    {
      as = 'div',
      variant = {
        type: 'flex',
        direction: 'col',
        gap: '2'
      },
      attr = {},
      className = '',
      children
    }: IContainerConstructor
  ) {
    super({
      as,
      attr: {
        ...attr,
        class: styles(className, variant)
      }
    });

    if (children) {
      children.forEach((child) => {
        this.element.appendChild(child.element);
      });
    }
  }

  append(children: Element[]) {
    children.forEach((child) => {
      this.element.appendChild(child.element);
    });
  }
}