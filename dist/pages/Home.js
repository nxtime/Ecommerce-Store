import { useState } from "../hooks/useState.js";
import { Button } from "../utils/buttonElement.js";
import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.render = function () {
        var _this = this;
        var title = new Element({
            element: 'h1',
            content: 'Home',
            attributes: {
                id: 'text-heading',
                "class": 'title'
            }
        });
        var normalButton = new Button({ text: "Clique aqui" });
        var _a = useState(this.state.counter), counter = _a[0], setCounter = _a[1];
        var updateCounter = function () {
            setCounter(function (state) { return state + 1; });
            _this.state.counter = counter();
            _this.effect();
            normalButton.updateState("Clique aqui ".concat(counter()));
        };
        normalButton.onClick(updateCounter);
        var superButton = new Button({
            text: "Change Home Title",
            onClick: function () {
                if (title.state === "New Home Title") {
                    title.updateState("Home");
                    return;
                }
                title.updateState("New Home Title");
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
    Home.effect = function () {
        console.log("new State", this.state);
    };
    Home.state = {
        counter: 0
    };
    return Home;
}());
export { Home };
