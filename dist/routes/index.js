import { root } from "../../dist/main.js";
import { Main } from "../components/layout/main.js";
import { pages } from "../pages/index.js";
import { NotFound } from "../pages/not-found.js";
var Router = /** @class */ (function () {
    function Router() {
        Router.pageContainer = root.appendChild(document.createElement('div'));
        Router.navigate("/");
        root.appendChild(Main.render());
    }
    Router.navigate = function (path) {
        if (this.path === path) {
            console.log("Already on the page: ", path);
            return;
        }
        ;
        history.pushState({}, '', path);
        this.path = path;
        this.render();
    };
    Router.render = function () {
        var _this = this;
        if (!root)
            return console.error('Root element not found');
        // console.log("Current path: ", this.path);
        var page = pages.find(function (page) { return page.path === _this.path; });
        var pageComponent = !page ? NotFound.render() : page.component.render();
        pageComponent.element.className = 'page' + pageComponent.element.className;
        if (page)
            pageComponent.element.id = 'page-' + page.id;
        Router.main.updatePage(pageComponent);
    };
    Router.main = Main;
    return Router;
}());
export { Router };
