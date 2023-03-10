import { api } from "../api/index.js";
import { MOCK_DATA } from "../data/products.js";
import { IProduct } from "../interfaces/product.js";

export class productsStore {
  static products: IProduct[] = MOCK_DATA;
  static isFetching: boolean = false;
  fns: any;

  private fetchProducts(): void {
    productsStore.isFetching = true;

    api.fetchProducts().then((products) => {
      productsStore.products = products;
      productsStore.isFetching = false;
    });
  }

  addCallback(callback: any) {
    this.fns.push(callback);
  }

  callback() {
    this.fns.forEach((fn: any) => fn());
  }

  add(product: { name: string; description: string, price: number, quantity: number }) {
    const newProduct = {
      id: productsStore.products.length + 1,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      categories: ["Dress"],
      image: "https://i.pravatar.cc/150?img=1",
    };

    productsStore.products.push(newProduct);

    this.callback();
  }

  static categories(category: string) {
    if (category === "all") return productsStore.products.length
    return productsStore.products.filter((product) => product.categories.includes(category)).length;
  }

  remove(id: number) {
    productsStore.products = productsStore.products.filter((product) => product.id !== id);

    this.callback();
  }
}