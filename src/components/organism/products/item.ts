import { IProduct } from "../../../interfaces/product.js";
import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Element } from "../../../utils/element.js";
import { Link } from "../../../utils/link.js";
import { Cart } from "../cart/index.js";

export class Product {
  state: IProduct
  container: Container
  productQuantity = new Element({
    as: "span",
    attr: {
      class: "product-rating",
    },
  })

  constructor(product: IProduct) {
    this.state = product;

    this.container = new Container({
      variant: {
        type: "flex",
        direction: 'col',
      },
      className: `product ${this.state.quantity === 0 ? 'out-of-stock' : ''}`,
    });

    this.render();
  }

  updateState(state: IProduct) {

  }

  render() {

    const productImage = new Link({
      children: [new Element({
        as: "img",
        attr: {
          src: this.state.image,
          alt: this.state.name,
        },
      })],
      to: `/products/${this.state.id}` as any,
      className: 'product-image',
    });

    this.productQuantity.updateState(`4.8 (${this.state.quantity})`);

    const productHeading = new Container({
      variant: {
        type: "flex",
        justify: "between",
        align: 'center',
      },
      className: 'w-full',
      children: [
        new Link({
          children: [new Element({
            as: "h2",
            attr: {
              class: 'text-md font-bold',
            },
            content: this.state.name,
          })],
          to: `/products/${this.state.id}` as any,
          className: 'product-title',
        }),
        this.productQuantity
      ]
    });

    const productDescription = new Element({
      as: "p",
      content: this.state.description,
      attr: {
        class: "product-description",
      },
    })

    const productPrice = new Element({
      as: "p",
      content: this.state.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      attr: {
        class: "product-price",
      },
    })

    const productCategories = new Container({
      variant: {
        type: "flex",
        gap: "1",
      },
      className: "product-categories",
      children: this.state.categories.map((category) => {
        return new Link({
          label: category,
          to: `/products?category=${category.toLowerCase().replace(' ', '_')}` as any,
          className: "badge product-categories--item",
        });
      })
    })

    const productButton = new Button({
      text: this.state.quantity === 0 ? 'Out of stock' : 'Add to cart',
      className: "btn product-button",
      onClick: (e) => {
        if (this.state.quantity === 0) {
          this.container.element.classList.add("out-of-stock");
          return;
        }

        console.log("Executing again, one more time");

        Cart.add(
          this.state,
          (newState: any) => {

            productButton.updateState('Added to cart');
            productButton.element.classList.add('added');

            setTimeout(() => {
              productButton.updateState('Add to cart');
              productButton.element.classList.remove('added');
            }, 2000);

            if (newState.quantity === 0) {
              this.container.element.classList.add('out-of-stock');
            } else if (this.state.quantity > 0 && this.container.element.classList.contains("out-of-stock")) {
              this.container.element.classList.remove("out-of-stock");
            }

            this.state = newState;
            this.productQuantity.updateState(`4.8 (${this.state.quantity})`);
          });
      }
    });

    this.container.append([
      productImage,
      productHeading,
      productCategories,
      productDescription,
      productPrice,
      productButton
    ])

    return this.container;
  }
}