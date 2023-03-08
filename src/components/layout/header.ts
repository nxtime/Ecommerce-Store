import { actionMenu, navlinks, notificationData } from "../../data/header.js";
import { Container } from "../../utils/container.js";
import { Link } from "../../utils/link.js";
import { Notification } from "../organism/notification.js";

export interface IUser {
  name: string;
  age: number;
  image: string;
}

export class Header {
  static state: IUser
  static container: Container;
  static pageComponent: Container;

  updateState(state: IUser) {
    Header.state = state;
    Header.effect();
  }

  static updateState(state) {
    Header.state = state
    Header.effect()
  }

  static effect() {
    console.log("new State", this.state);
    this.render();
  }

  static render() {

    const logo = new Link({
      label: "Ecommerce",
      to: "/",
      className: "text-2xl font-bold",
    });

    const navlinksContainer = new Container({
      as: 'ul',
      variant: {
        type: 'flex',
        direction: 'row',
        gap: '4'
      },
      children: navlinks.map((link) => {
        return new Link({
          label: link.label,
          className: "navlink",
          to: link.path
        })
      })
    });

    const actionMenuContainer = new Container({
      as: 'ul',
      variant: {
        type: 'flex',
        direction: 'row',
        align: 'center',
        gap: '4'
      },
      children: [
        ...actionMenu.map((link) => {
          return new Link({
            label: link.label,
            className: link.className,
            to: link.path
          })
        }),
        new Notification()
      ]
    });

    Header.container = new Container({
      as: "header",
      variant: {
        type: 'flex',
        direction: 'row',
        align: 'center',
        gap: '8'
      },
      className: "header-container",
      children: [logo,
        new Container({
          variant: {
            type: 'flex',
            direction: 'row',
            justify: 'between',
            align: 'center',
            gap: '2'
          },
          className: 'w-full',
          children: [navlinksContainer, actionMenuContainer]
        })
      ]
    });

    return Header.container;
  }
}