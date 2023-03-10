import { cartData } from "../../../data/header.js";
import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Element } from "../../../utils/element.js";
import { Modal } from "../../templates/modal.js";
import { productItem } from "./productItem.js";

export class Cart extends Button {
  static state: {
    items: {
      product: {

        id: number;
        name: string;
        price: number;
        description: string;
        quantity: number;
        cart: number;
        categories: string[],
        image: string;
      },
      callback: (newState: any) => void;
    }[]
  } = {
      items: []
    };
  static element: any;

  constructor() {
    super({
      text: cartData.label,
      className: cartData.className,
      onClick: () => {
        Cart.toggleModal();
      }
    });

    this.element.classList.remove('btn');
    this.element.setAttribute('data-count', Cart.state.items.length.toString());

    Cart.element = this.element;
  }

  static toggleModal() {
    Modal.open(Cart.customModal())
  }

  static add(product: any, callback: (newState: any) => void) {

    const productIndex = Cart.state.items.findIndex((item) => item.product?.id === product.id);

    product.quantity -= 1;

    if (productIndex === -1) {
      product.cart = 1;
      Cart.state.items.push({ product, callback });
    } else {
      product.cart += 1;
      Cart.state.items[productIndex].product = product;
    }
    callback(product);
    Cart.updateState();
  }

  static updateState() {
    // console.log(Cart.element);
    Cart.element.setAttribute('data-count', Cart.state.items.length.toString());
  }

  static customModal() {
    const title = new Element({
      as: 'h1',
      content: 'Cart',
      attr: {
        class: 'text-4xl',
      },
    });

    const productsContainer = new Container({
      as: 'ul',
      variant: {
        type: 'flex',
        gap: '2',
      },
      children: Cart.state.items.map(({ product, callback }) => {
        const cartProductItem = new productItem(product, callback);
        return cartProductItem.render();
      })
    });

    console.log("Type of productsContainer: ", productsContainer)

    // const productsContainer = new Container(
    //   {
    //     as: 'ul',
    //     variant: {
    //       type: 'flex',
    //       gap: '2',
    //     },
    //     children: Cart.state.items.map(({ product, callback }) => {
    //       const cartProductItem = new Container({
    //         as: 'li',
    //         variant: {
    //           type: 'flex',
    //           gap: '2',
    //           align: 'center'
    //         },
    //         children: [
    //           new Element({
    //             as: 'img',
    //             attr: {
    //               src: product.image,
    //               alt: product.name,
    //             },
    //           }),
    //         ]
    //       });

    //       const removeProductButton = new Button({
    //         text: 'Remove',
    //         onClick: () => {
    //           product.quantity += product.cart;
    //           product.cart = 0;
    //           callback(product);
    //           Cart.state.items = Cart.state.items.filter((item) => item.product.id !== product.id);
    //           Cart.updateState();
    //           cartProductItem.element.remove();
    //         }
    //       });

    //       cartProductItem.append([new Container({ children: [productButton, removeProductButton] })]);

    //       return cartProductItem;
    //     })
    //   })

    const container = new Container({
      variant: {
        type: 'flex',
        direction: 'col',
        gap: '2',
        justify: 'center',
        align: 'center',
      },
      children: [
        title,
        productsContainer,
        new Button({
          text: 'Close',
          onClick: () => {
            Modal.close();
          }
        })
      ]
    });

    return container;
  }
}