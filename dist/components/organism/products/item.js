import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Element } from "../../../utils/element.js";
import { Link } from "../../../utils/link.js";
import { Cart } from "../cart/index.js";
var Product = /** @class */ (function () {
    function Product(product) {
        this.productQuantity = new Element({
            as: "span",
            attr: {
                "class": "product-rating"
            }
        });
        this.state = product;
        this.container = new Container({
            variant: {
                type: "flex",
                direction: 'col'
            },
            className: "product ".concat(this.state.quantity === 0 ? 'out-of-stock' : '')
        });
        this.render();
    }
    Product.prototype.updateState = function (state) {
    };
    Product.prototype.render = function () {
        var _this = this;
        var productImage = new Link({
            children: [new Element({
                    as: "img",
                    attr: {
                        src: this.state.image,
                        alt: this.state.name
                    }
                })],
            to: "/products/".concat(this.state.id),
            className: 'product-image'
        });
        this.productQuantity.updateState("4.8 (".concat(this.state.quantity, ")"));
        var productHeading = new Container({
            variant: {
                type: "flex",
                justify: "between",
                align: 'center'
            },
            className: 'w-full',
            children: [
                new Link({
                    children: [new Element({
                            as: "h2",
                            attr: {
                                "class": 'text-md font-bold'
                            },
                            content: this.state.name
                        })],
                    to: "/products/".concat(this.state.id),
                    className: 'product-title'
                }),
                this.productQuantity
            ]
        });
        var productDescription = new Element({
            as: "p",
            content: this.state.description,
            attr: {
                "class": "product-description"
            }
        });
        var productPrice = new Element({
            as: "p",
            content: this.state.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            attr: {
                "class": "product-price"
            }
        });
        var productCategories = new Container({
            variant: {
                type: "flex",
                gap: "1"
            },
            className: "product-categories",
            children: this.state.categories.map(function (category) {
                return new Link({
                    label: category,
                    to: "/products?category=".concat(category.toLowerCase().replace(' ', '_')),
                    className: "badge product-categories--item"
                });
            })
        });
        var productButton = new Button({
            text: this.state.quantity === 0 ? 'Out of stock' : 'Add to cart',
            className: "btn product-button",
            onClick: function (e) {
                if (_this.state.quantity === 0) {
                    _this.container.element.classList.add("out-of-stock");
                    return;
                }
                console.log("Executing again, one more time");
                Cart.add(_this.state, function (newState) {
                    productButton.updateState('Added to cart');
                    productButton.element.classList.add('added');
                    setTimeout(function () {
                        productButton.updateState('Add to cart');
                        productButton.element.classList.remove('added');
                    }, 2000);
                    if (newState.quantity === 0) {
                        _this.container.element.classList.add('out-of-stock');
                    }
                    else if (_this.state.quantity > 0 && _this.container.element.classList.contains("out-of-stock")) {
                        _this.container.element.classList.remove("out-of-stock");
                    }
                    _this.state = newState;
                    _this.productQuantity.updateState("4.8 (".concat(_this.state.quantity, ")"));
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
        ]);
        return this.container;
    };
    return Product;
}());
export { Product };
