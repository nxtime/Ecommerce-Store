import { FilterContainer } from "../components/organism/products/filter.js";
import { Product } from "../components/organism/products/item.js";
import { productsStore } from "../store/products.js";
import { Button } from "../utils/buttonElement.js";
import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";

export class Products {
  static state = {
    counter: 10,
    title: "Change Products Title",
  };

  static render(filter?: any) {
    const title = new Element({
      as: 'h1',
      content: this.state.title,
      attr: {
        id: 'text-heading',
        class: 'title'
      },
    });

    const productsMap = () => {
      if (filter && filter !== 'all') {
        return productsStore.products.filter((product) =>
          product.categories.includes(filter))
      }
      return productsStore.products;
    }

    const productsContainer = new Container({
      variant: {
        type: "flex",
        gap: "2"
      },
      className: "products-container",
      children: productsMap().map((product) => {
        const productItem = new Product(product);
        return productItem.container;
      })
    });

    FilterContainer.render()

    const container = new Container({
      children: [
        title,
        new Container({
          variant: {
            type: 'flex',
            gap: '2',
            align: 'start'
          },
          children: [
            FilterContainer.container,
            productsContainer,
          ]
        })
      ]
    });

    return container;
  }

  static effect() {
    console.log("new State", this.state);
  }
}