import { useState } from "../hooks/useState.js";

export interface IElementConstructor {
  as: string;
  content?: any;
  attr?: any;
  events?: {
    type: keyof HTMLElementEventMap;
    listener: EventListenerOrEventListenerObject;
  }[];
  children?: Element[];
}

export class Element {
  element: any;
  content: any;
  state: any;

  constructor({
    as,
    content,
    attr,
    events,
    children,
  }: IElementConstructor) {
    const el = document.createElement(as);

    this.content = content;

    if (attr) {
      for (const key in attr) {
        el.setAttribute(key, attr[key]);
      }
    }

    if (events) {
      events.forEach((event) => {
        el.addEventListener(event.type, event.listener);
      });
    }

    if (children) {
      children.forEach((child) => {
        el.appendChild(child.element);
      });
    };

    this.element = el;

    this.render();
  }

  updateState(state: any) {
    this.state = state;
    this.render();
  }

  useState(initialState: any) {
    return useState(initialState, this);
  }

  render() {
    if (!this.content && !this.state) return;
    this.element.innerHTML = this.state ?? this.content;
    //    return this.state ?? this.content;
  }

}