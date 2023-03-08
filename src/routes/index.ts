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

  constructor() {
    Router.pageContainer = root.appendChild(document.createElement('div'));

    Router.navigate("/");

    root.appendChild(Main.render())
  }

  static navigate(path: IPaths) {
    if (this.path === path) {
      console.log("Already on the page: ", path);
      return;
    };

    history.pushState({}, '', path);

    this.path = path;
    this.render();
  }

  static render() {
    if (!root) return console.error('Root element not found');

    // console.log("Current path: ", this.path);
    const page = pages.find(page => page.path === this.path);

    const pageComponent = !page ? NotFound.render() : page.component.render();

    pageComponent.element.className = 'page' + pageComponent.element.className;

    if (page) pageComponent.element.id = 'page-' + page.id;

    Router.main.updatePage(pageComponent);
  }
}