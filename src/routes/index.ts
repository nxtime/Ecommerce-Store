import { root } from "../../dist/main.js";
import { Main } from "../components/layout/main.js";
import { IPaths } from "../interfaces/index.js";
import { pages } from "../pages/index.js";
import { NotFound } from "../pages/not-found.js";

export class Router {
  static page: string;
  static path: IPaths;
  static pageContainer: any;
  static main = Main;
  static queryParams = new URLSearchParams(window.location.search);
  static filter: any;

  constructor() {
    Router.pageContainer = root.appendChild(document.createElement('div'));

    // Router.navigate("/products");
    root.appendChild(Main.render())

    Router.path = window.location.pathname as IPaths;

    const params = new URLSearchParams(window.location.search);
    Router.filter = params.get('category');

    Router.render();
  }

  static navigate(path: IPaths) {
    if (this.path === path && Router.filter === undefined) {
      console.log("Already on the page: ", path);
      return;
    };

    Router.filter = undefined;

    history.pushState({}, '', path);

    this.path = path;
    this.render();
  }

  static queryParam(key: string, value: string, callback: () => void) {
    if (value) {
      if (Router.queryParams.has(key)) {
        Router.queryParams.delete(key);
      }
      Router.queryParams.append(key, value);
      history.pushState({}, '', `${Router.path}?${Router.queryParams.toString()}`);
    } else {
      Router.queryParams.delete(key);
    }

    // callback();
    Router.filter = value;
    Router.render();
  }

  static removeQueryParam(key: string, value: string) {
    if (Router.queryParams.has(key)) {
      Router.queryParams.delete(key);
      // values.forEach(value => {
      //   Router.queryParams.append(key, value);
      // });
      history.pushState({}, '', window.location.pathname);
    }
  }

  static render() {
    if (!root) return console.error('Root element not found');

    // console.log("Current path: ", this.path);
    const page = pages.find(page => page.path === this.path);

    const pageComponent = !page ? NotFound.render() : page.component.render(Router.filter);

    pageComponent.element.className = 'page' + pageComponent.element.className;

    if (page) pageComponent.element.id = 'page-' + page.id;

    Router.main.updatePage(pageComponent);
  }
}