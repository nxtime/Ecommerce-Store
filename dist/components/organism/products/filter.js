var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Router } from "../../../routes/index.js";
import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Filter } from "../filter.js";
var FilterContainer = /** @class */ (function () {
    function FilterContainer() {
    }
    FilterContainer.render = function () {
        if (Router.filter) {
            this.filters.map(function (filter) {
                if (filter.value === Router.filter)
                    filter.checked = true;
                else
                    filter.checked = false;
                return filter;
            });
        }
        var elementsContainer = new Container({
            className: 'filter-wrapper'
        });
        var filterContainer = new Container({
            variant: {
                type: 'flex'
            },
            className: 'filter-container'
        });
        filterContainer.append([
            new Filter({
                id: 'all-category',
                label: 'All',
                value: 'all',
                checked: true
            }).render()
        ]);
        for (var key in FilterContainer.filters) {
            var filter = new Filter(__assign({}, FilterContainer.filters[key]));
            filterContainer.append([filter.render()]);
        }
        var clearButton = new Button({
            text: 'Categories ▼',
            className: 'btn w-full max-w-full active',
            onClick: function () {
                if (clearButton.element.classList.contains('active')) {
                    clearButton.updateState('Categories ▲');
                    clearButton.element.classList.remove('active');
                    filterContainer.element.classList.add('hidden');
                }
                else {
                    clearButton.updateState('Categories ▼');
                    clearButton.element.classList.add('active');
                    filterContainer.element.classList.remove('hidden');
                }
            }
        });
        clearButton.render();
        elementsContainer.append([clearButton, filterContainer]);
        FilterContainer.container = elementsContainer;
    };
    FilterContainer.filters = [
        {
            id: 'dress-category',
            label: 'Dress',
            value: 'dress',
            checked: false
        },
        {
            id: 'long-dress-category',
            label: 'Long Dress',
            value: 'long-dress',
            checked: false
        }
    ];
    return FilterContainer;
}());
export { FilterContainer };
