import { useState } from "../hooks/useState.js";

export interface IElementConstructor {
  element: string;
  content?: any;
  attributes?: any;
  events?: {
    type: keyof HTMLElementEventMap;
    listener: EventListenerOrEventListenerObject;
  }[];
}

export class Element {
  element: any;
  content: any;
  state: any;

  constructor({
    element,
    content,
    attributes,
    events
  }: IElementConstructor) {
    const el = document.createElement(element);

    this.content = content;

    if (attributes) {
      for (const key in attributes) {
        el.setAttribute(key, attributes[key]);
      }
    }

    if (events) {
      events.forEach((event) => {
        el.addEventListener(event.type, event.listener);
      });
    }

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