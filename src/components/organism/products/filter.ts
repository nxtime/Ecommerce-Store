import { Router } from "../../../routes/index.js";
import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Filter } from "../filter.js";

type IFilterValue = "Dress" | "Long Dress";

export class FilterContainer {
  static filters: {
    id: string;
    label: string;
    value: string;
    checked: boolean;
  }[] = [
      {
        id: 'dress-category',
        label: 'Dress',
        value: 'dress',
        checked: false,
      },
      {
        id: 'long-dress-category',
        label: 'Long Dress',
        value: 'long-dress',
        checked: false,
      }
    ]
  static container: any;


  static render() {

    if (Router.filter) {
      this.filters.map((filter) => {
        if (filter.value === Router.filter) filter.checked = true;
        else filter.checked = false;
        return filter
      })
    }

    const elementsContainer = new Container({
      className: 'filter-wrapper'
    });

    const filterContainer = new Container({
      variant: {
        type: 'flex',
      },
      className: 'filter-container'
    });

    filterContainer.append([
      new Filter({
        id: 'all-category',
        label: 'All',
        value: 'all',
        checked: true,
      }).render()
    ])
    for (const key in FilterContainer.filters) {
      const filter = new Filter({
        ...FilterContainer.filters[key] as any,
      });

      filterContainer.append([filter.render()]);
    }

    const clearButton = new Button({
      text: 'Categories ▼',
      className: 'btn w-full max-w-full active',
      onClick: () => {
        if (clearButton.element.classList.contains('active')) {
          clearButton.updateState('Categories ▲')
          clearButton.element.classList.remove('active');
          filterContainer.element.classList.add('hidden');
        } else {
          clearButton.updateState('Categories ▼')
          clearButton.element.classList.add('active');
          filterContainer.element.classList.remove('hidden');
        }
      }
    });

    clearButton.render()

    elementsContainer.append([clearButton, filterContainer]);

    FilterContainer.container = elementsContainer;
  }
}