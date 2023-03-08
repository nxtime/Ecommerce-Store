import { Container } from "../../utils/container.js";
import { Modal } from "../templates/modal.js";
import { Header } from "./header.js";
var Main = /** @class */ (function () {
    function Main() {
        Main.render();
        Modal.render();
        Header.updateState(Main.state);
    }
    Main.updatePage = function (page) {
        Main.pageComponent.element.replaceWith(page.element);
        Main.pageComponent = page;
        Main.effect();
    };
    Main.render = function () {
        Header.render();
        // console.log("Render do main layout: ", Main.pageComponent);
        var layoutContainer = new Container({
            className: "layout-container",
            variant: {
                type: "flex",
                direction: "col"
            },
            children: [Header.container, Main.pageComponent]
        });
        Main.container = layoutContainer;
        return layoutContainer.element;
    };
    Main.effect = function () {
        // console.log("new State", this.state);
        // console.log("Atualizated", Main.pageComponent)
    };
    Main.state = {
        name: "John",
        age: 20,
        image: "https://i.pravatar.cc/150?img=1"
    };
    Main.pageComponent = new Container({});
    Main.header = Header;
    Main.container = new Container({});
    return Main;
}());
export { Main };
