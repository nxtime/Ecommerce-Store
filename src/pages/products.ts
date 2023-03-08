import { Button } from "../utils/buttonElement.js";
import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";

export class Products {
  static state = {
    counter: 0,
    title: "Change Products Title",
  };

  static render() {
    const title = new Element({
      element: 'h1',
      content: this.state.title,
      attributes: {
        id: 'text-heading',
        class: 'title'
      },
    });

    const normalButton = new Button({
      text: `Clique aqui ${this.state.counter}`,
      onClick: () => {
        this.state.counter += 1;
        this.effect();
        normalButton.updateState(`Clique aqui ${this.state.counter}`);
      },
    });

    const superButton = new Button({
      text: "Change Products Title",
      onClick: () => {
        if (title.state === "Changed Products Title") {
          title.updateState("Change Products Title");
          this.state.title = "Change Products Title";
          return;
        }
        title.updateState("Changed Products Title");
        this.state.title = "Changed Products Title";
      }
    });

    const container = new Container({
      children: [title, new Container({
        variant: {
          type: "flex",
          gap: "2"
        },
        children: [normalButton, superButton]
      })]
    });

    return container;
  }

  static effect() {
    console.log("new State", this.state);
  }
}