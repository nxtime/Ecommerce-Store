import { Router } from "../../routes/index.js";
import { productsStore } from "../../store/products.js";
import { Container } from "../../utils/container.js";
import { Element } from "../../utils/element.js";
import { Input } from "../../utils/inputElement.js";
var Filter = /** @class */ (function () {
    function Filter(filter) {
        var _this = this;
        this.filter = filter;
        this.checkbox = new Input({
            attr: {
                type: 'radio',
                name: 'filter-categories',
                value: filter.value,
                id: filter.id
            },
            customClass: 'checkbox',
            callback: function (event) {
                // console.log("Changed checkbox container filter to: ", event.target.checked);
                _this.checkbox.checked = event.target.checked;
                if (!!_this.checkbox.checked) {
                    Router.queryParam('category', _this.filter.value.toLocaleLowerCase().replaceAll(' ', '-'), function () {
                        // Products.render()
                    });
                }
                else {
                    Router.removeQueryParam('category', _this.filter.value.toLocaleLowerCase().replaceAll(' ', '-'));
                }
            }
        });
        if (this.filter.checked)
            this.checkbox.element.checked = true;
    }
    Filter.prototype.render = function () {
        var label = new Element({
            as: 'label',
            attr: {
                "class": 'filter-label',
                "for": this.filter.id
            },
            children: [
                new Element({
                    as: 'span',
                    attr: {
                        "class": 'filter-label-text'
                    },
                    content: this.filter.label
                }),
                new Element({
                    as: 'span',
                    attr: {
                        "class": 'filter-label-value'
                    },
                    content: productsStore.categories(this.filter.value)
                })
            ]
        });
        var container = new Container({
            variant: {
                type: 'flex',
                justify: 'between'
            },
            className: 'filter',
            children: [this.checkbox, label]
        });
        return container;
    };
    return Filter;
}());
export { Filter };
