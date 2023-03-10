import { root } from "../../dist/main.js";
import { Main } from "../components/layout/main.js";
import { pages } from "../pages/index.js";
import { NotFound } from "../pages/not-found.js";
var Router = /** @class */ (function () {
    function Router() {
        Router.pageContainer = root.appendChild(document.createElement('div'));
        // Router.navigate("/products");
        root.appendChild(Main.render());
        Router.path = window.location.pathname;
        var params = new URLSearchParams(window.location.search);
        Router.filter = params.get('category');
        Router.render();
    }
    Router.navigate = function (path) {
        if (this.path === path && Router.filter === undefined) {
            console.log("Already on the page: ", path);
            return;
        }
        ;
        Router.filter = undefined;
        history.pushState({}, '', path);
        this.path = path;
        this.render();
    };
    Router.queryParam = function (key, value, callback) {
        if (value) {
            if (Router.queryParams.has(key)) {
                Router.queryParams["delete"](key);
            }
            Router.queryParams.append(key, value);
            history.pushState({}, '', "".concat(Router.path, "?").concat(Router.queryParams.toString()));
        }
        else {
            Router.queryParams["delete"](key);
        }
        // callback();
        Router.filter = value;
        Router.render();
    };
    Router.removeQueryParam = function (key, value) {
        if (Router.queryParams.has(key)) {
            Router.queryParams["delete"](key);
            // values.forEach(value => {
            //   Router.queryParams.append(key, value);
            // });
            history.pushState({}, '', window.location.pathname);
        }
    };
    Router.render = function () {
        var _this = this;
        if (!root)
            return console.error('Root element not found');
        // console.log("Current path: ", this.path);
        var page = pages.find(function (page) { return page.path === _this.path; });
        var pageComponent = !page ? NotFound.render() : page.component.render(Router.filter);
        pageComponent.element.className = 'page' + pageComponent.element.className;
        if (page)
            pageComponent.element.id = 'page-' + page.id;
        Router.main.updatePage(pageComponent);
    };
    Router.main = Main;
    Router.queryParams = new URLSearchParams(window.location.search);
    return Router;
}());
export { Router };
