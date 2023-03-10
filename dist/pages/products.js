import { FilterContainer } from "../components/organism/products/filter.js";
import { Product } from "../components/organism/products/item.js";
import { productsStore } from "../store/products.js";
import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";
var Products = /** @class */ (function () {
    function Products() {
    }
    Products.render = function (filter) {
        var title = new Element({
            as: 'h1',
            content: this.state.title,
            attr: {
                id: 'text-heading',
                "class": 'title'
            }
        });
        var productsMap = function () {
            if (filter && filter !== 'all') {
                return productsStore.products.filter(function (product) {
                    return product.categories.includes(filter);
                });
            }
            return productsStore.products;
        };
        var productsContainer = new Container({
            variant: {
                type: "flex",
                gap: "2"
            },
            className: "products-container",
            children: productsMap().map(function (product) {
                var productItem = new Product(product);
                return productItem.container;
            })
        });
        FilterContainer.render();
        var container = new Container({
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
    };
    Products.effect = function () {
        console.log("new State", this.state);
    };
    Products.state = {
        counter: 10,
        title: "Change Products Title"
    };
    return Products;
}());
export { Products };
