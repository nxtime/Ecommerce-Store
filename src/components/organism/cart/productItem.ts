import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Element } from "../../../utils/element.js";
import { Input } from "../../../utils/inputElement.js";
import { Cart } from "./index.js";

interface ICartProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  cart: number;
  categories: string[],
  image: string;
}

export class productItem {
  state: ICartProduct;
  callback: (newState: any) => void;

  constructor(product: ICartProduct, callback: (newState: any) => void) {
    this.state = product;
    this.callback = callback;
  }

  render() {
    console.log("This is the current state: ", this.state);

    const productContainer = new Container({
      variant: {
        type: 'flex',
        justify: 'between',
      },
      className: 'cart-product-container'
    });

    const productButton = new Button({
      text: this.state.cart.toString(),
      onClick: () => {
        if (this.state.quantity === 0) return;

        Cart.add(this.state, this.callback);
        productButton.updateState(this.state.cart.toString())
      }
    });



    const productImage = new Element({
      as: 'img',
      attr: {
        class: 'cart-product-image'
      }
    });

    const productQuantity = new Input({
      attr: {
        type: 'number',
        min: '1',
        max: this.state.quantity + this.state.cart,
        value: this.state.cart,
      },
      callback: (event) => {
        const newInput = parseInt((event.target as HTMLInputElement).value);
        let newQuantity = this.state.quantity + this.state.cart - newInput;

        if (newInput > this.state.quantity + this.state.cart) {
          newQuantity = this.state.quantity + this.state.cart;
          productQuantity.element.value = newQuantity;
        }

        this.state.quantity = newQuantity;
        this.state.cart = newInput > this.state.quantity + this.state.cart ? this.state.quantity + this.state.cart : newInput;

        this.callback(this.state);

        productPrice.updateState(this.state.price * this.state.cart);
        productOnCart.updateState(this.state.cart);
        productQuantity.updateState({
          attr: {
            max: this.state.quantity + this.state.cart
          }
        });
      },
      customClass: 'cart-product-quantity'
    })

    const productPrice = new Element({
      as: 'p',
      content: this.state.price * this.state.cart,
      attr: {
        class: 'cart-product-price'
      },
    });

    const productOnCart = new Element({
      as: 'p',
      content: this.state.cart,
      attr: {
        class: 'cart-product-on-cart'
      },
    })

    const productDetails = new Container({
      className: 'cart-product-details',
      children: [
        productOnCart,
        productQuantity,
        productPrice
      ]
    });

    console.log("This is the product details: ", productDetails)

    productContainer.append([productImage, productDetails]);

    console.log(productContainer);

    return productContainer;
  }
}