import { Element } from "./element.js";

interface IInputConstructor {
  callback?: (event: Event) => void;
  customClass?: string;
  value?: string;
  className?: string;
  attr?: any;
}

export class Input extends Element {
  constructor({
    callback,
    customClass,
    value = '',
    className = '',
    attr,
  }: IInputConstructor) {
    super({
      as: 'input',
      attr: {
        type: 'text',
        value,
        class: customClass ? customClass : 'input ' + className,
        ...attr
      }
    });

    if (callback) {
      this.element.addEventListener('change', callback);
    }
  }
}