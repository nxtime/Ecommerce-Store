import { Button } from "../utils/buttonElement.js";
import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";
var Products = /** @class */ (function () {
    function Products() {
    }
    Products.render = function () {
        var _this = this;
        var title = new Element({
            element: 'h1',
            content: this.state.title,
            attributes: {
                id: 'text-heading',
                "class": 'title'
            }
        });
        var normalButton = new Button({
            text: "Clique aqui ".concat(this.state.counter),
            onClick: function () {
                _this.state.counter += 1;
                _this.effect();
                normalButton.updateState("Clique aqui ".concat(_this.state.counter));
            }
        });
        var superButton = new Button({
            text: "Change Products Title",
            onClick: function () {
                if (title.state === "Changed Products Title") {
                    title.updateState("Change Products Title");
                    _this.state.title = "Change Products Title";
                    return;
                }
                title.updateState("Changed Products Title");
                _this.state.title = "Changed Products Title";
            }
        });
        var container = new Container({
            children: [title, new Container({
                    variant: {
                        type: "flex",
                        gap: "2"
                    },
                    children: [normalButton, superButton]
                })]
        });
        return container;
    };
    Products.effect = function () {
        console.log("new State", this.state);
    };
    Products.state = {
        counter: 0,
        title: "Change Products Title"
    };
    return Products;
}());
export { Products };
