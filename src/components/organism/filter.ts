import { Products } from "../../pages/products.js";
import { Router } from "../../routes/index.js";
import { productsStore } from "../../store/products.js";
import { Container } from "../../utils/container.js";
import { Element } from "../../utils/element.js";
import { Input } from "../../utils/inputElement.js";


export interface IFilter {
  id: string,
  label: string;
  value: string;
  checked: boolean;
}

export class Filter {
  checkbox: any;
  filter: IFilter

  constructor(filter: IFilter) {
    this.filter = filter;

    this.checkbox = new Input({
      attr: {
        type: 'radio',
        name: 'filter-categories',
        value: filter.value,
        id: filter.id
      },
      customClass: 'checkbox',
      callback: (event: any) => {
        // console.log("Changed checkbox container filter to: ", event.target.checked);
        this.checkbox.checked = event.target.checked;

        if (!!this.checkbox.checked) {
          Router.queryParam(
            'category',
            this.filter.value.toLocaleLowerCase().replaceAll(' ', '-'),
            () => {
              // Products.render()
            });
        } else {
          Router.removeQueryParam('category', this.filter.value.toLocaleLowerCase().replaceAll(' ', '-'));
        }
      }
    });

    if (this.filter.checked) this.checkbox.element.checked = true;
  }

  render() {

    const label = new Element({
      as: 'label',
      attr: {
        class: 'filter-label',
        for: this.filter.id,
      },
      children: [
        new Element({
          as: 'span',
          attr: {
            class: 'filter-label-text'
          },
          content: this.filter.label
        }),
        new Element({
          as: 'span',
          attr: {
            class: 'filter-label-value'
          },
          content: productsStore.categories(this.filter.value)
        })
      ]
    })


    const container = new Container({
      variant: {
        type: 'flex',
        justify: 'between',
      },
      className: 'filter',
      children: [this.checkbox, label]
    });

    return container;

  }
}