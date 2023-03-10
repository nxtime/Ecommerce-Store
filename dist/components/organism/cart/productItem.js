import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Element } from "../../../utils/element.js";
import { Input } from "../../../utils/inputElement.js";
import { Cart } from "./index.js";
var productItem = /** @class */ (function () {
    function productItem(product, callback) {
        this.state = product;
        this.callback = callback;
    }
    productItem.prototype.render = function () {
        var _this = this;
        console.log("This is the current state: ", this.state);
        var productContainer = new Container({
            variant: {
                type: 'flex',
                justify: 'between'
            },
            className: 'cart-product-container'
        });
        var productButton = new Button({
            text: this.state.cart.toString(),
            onClick: function () {
                if (_this.state.quantity === 0)
                    return;
                Cart.add(_this.state, _this.callback);
                productButton.updateState(_this.state.cart.toString());
            }
        });
        var productImage = new Element({
            as: 'img',
            attr: {
                "class": 'cart-product-image'
            }
        });
        var productQuantity = new Input({
            attr: {
                type: 'number',
                min: '1',
                max: this.state.quantity + this.state.cart,
                value: this.state.cart
            },
            callback: function (event) {
                var newInput = parseInt(event.target.value);
                var newQuantity = _this.state.quantity + _this.state.cart - newInput;
                if (newInput > _this.state.quantity + _this.state.cart) {
                    newQuantity = _this.state.quantity + _this.state.cart;
                    productQuantity.element.value = newQuantity;
                }
                _this.state.quantity = newQuantity;
                _this.state.cart = newInput > _this.state.quantity + _this.state.cart ? _this.state.quantity + _this.state.cart : newInput;
                _this.callback(_this.state);
                productPrice.updateState(_this.state.price * _this.state.cart);
                productOnCart.updateState(_this.state.cart);
                productQuantity.updateState({
                    attr: {
                        max: _this.state.quantity + _this.state.cart
                    }
                });
            },
            customClass: 'cart-product-quantity'
        });
        var productPrice = new Element({
            as: 'p',
            content: this.state.price * this.state.cart,
            attr: {
                "class": 'cart-product-price'
            }
        });
        var productOnCart = new Element({
            as: 'p',
            content: this.state.cart,
            attr: {
                "class": 'cart-product-on-cart'
            }
        });
        var productDetails = new Container({
            className: 'cart-product-details',
            children: [
                productOnCart,
                productQuantity,
                productPrice
            ]
        });
        console.log("This is the product details: ", productDetails);
        productContainer.append([productImage, productDetails]);
        console.log(productContainer);
        return productContainer;
    };
    return productItem;
}());
export { productItem };
