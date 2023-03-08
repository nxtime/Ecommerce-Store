import { Container } from "../../utils/container.js";
import { Modal } from "../templates/modal.js";
import { Header } from "./header.js";

export class Main {
  static state = {
    name: "John",
    age: 20,
    image: "https://i.pravatar.cc/150?img=1"
  };
  static pageComponent = new Container({});
  static header = Header
  static container = new Container({});


  constructor() {
    Main.render();
    Modal.render();
    Header.updateState(Main.state);
  }

  static updatePage(page: any) {
    Main.pageComponent.element.replaceWith(page.element)

    Main.pageComponent = page;

    Main.effect();
  }

  static render() {
    Header.render()

    // console.log("Render do main layout: ", Main.pageComponent);

    const layoutContainer = new Container({
      className: "layout-container",
      variant: {
        type: "flex",
        direction: "col"
      },
      children: [Header.container, Main.pageComponent]
    })

    Main.container = layoutContainer;

    return layoutContainer.element;
  }

  static effect() {
    // console.log("new State", this.state);
    // console.log("Atualizated", Main.pageComponent)
  }
}