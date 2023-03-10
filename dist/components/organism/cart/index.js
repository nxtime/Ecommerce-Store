var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { cartData } from "../../../data/header.js";
import { Button } from "../../../utils/buttonElement.js";
import { Container } from "../../../utils/container.js";
import { Element } from "../../../utils/element.js";
import { Modal } from "../../templates/modal.js";
import { productItem } from "./productItem.js";
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        var _this = _super.call(this, {
            text: cartData.label,
            className: cartData.className,
            onClick: function () {
                Cart.toggleModal();
            }
        }) || this;
        _this.element.classList.remove('btn');
        _this.element.setAttribute('data-count', Cart.state.items.length.toString());
        Cart.element = _this.element;
        return _this;
    }
    Cart.toggleModal = function () {
        Modal.open(Cart.customModal());
    };
    Cart.add = function (product, callback) {
        var productIndex = Cart.state.items.findIndex(function (item) { var _a; return ((_a = item.product) === null || _a === void 0 ? void 0 : _a.id) === product.id; });
        product.quantity -= 1;
        if (productIndex === -1) {
            product.cart = 1;
            Cart.state.items.push({ product: product, callback: callback });
        }
        else {
            product.cart += 1;
            Cart.state.items[productIndex].product = product;
        }
        callback(product);
        Cart.updateState();
    };
    Cart.updateState = function () {
        // console.log(Cart.element);
        Cart.element.setAttribute('data-count', Cart.state.items.length.toString());
    };
    Cart.customModal = function () {
        var title = new Element({
            as: 'h1',
            content: 'Cart',
            attr: {
                "class": 'text-4xl'
            }
        });
        var productsContainer = new Container({
            as: 'ul',
            variant: {
                type: 'flex',
                gap: '2'
            },
            children: Cart.state.items.map(function (_a) {
                var product = _a.product, callback = _a.callback;
                var cartProductItem = new productItem(product, callback);
                return cartProductItem.render();
            })
        });
        console.log("Type of productsContainer: ", productsContainer);
        // const productsContainer = new Container(
        //   {
        //     as: 'ul',
        //     variant: {
        //       type: 'flex',
        //       gap: '2',
        //     },
        //     children: Cart.state.items.map(({ product, callback }) => {
        //       const cartProductItem = new Container({
        //         as: 'li',
        //         variant: {
        //           type: 'flex',
        //           gap: '2',
        //           align: 'center'
        //         },
        //         children: [
        //           new Element({
        //             as: 'img',
        //             attr: {
        //               src: product.image,
        //               alt: product.name,
        //             },
        //           }),
        //         ]
        //       });
        //       const removeProductButton = new Button({
        //         text: 'Remove',
        //         onClick: () => {
        //           product.quantity += product.cart;
        //           product.cart = 0;
        //           callback(product);
        //           Cart.state.items = Cart.state.items.filter((item) => item.product.id !== product.id);
        //           Cart.updateState();
        //           cartProductItem.element.remove();
        //         }
        //       });
        //       cartProductItem.append([new Container({ children: [productButton, removeProductButton] })]);
        //       return cartProductItem;
        //     })
        //   })
        var container = new Container({
            variant: {
                type: 'flex',
                direction: 'col',
                gap: '2',
                justify: 'center',
                align: 'center'
            },
            children: [
                title,
                productsContainer,
                new Button({
                    text: 'Close',
                    onClick: function () {
                        Modal.close();
                    }
                })
            ]
        });
        return container;
    };
    Cart.state = {
        items: []
    };
    return Cart;
}(Button));
export { Cart };
