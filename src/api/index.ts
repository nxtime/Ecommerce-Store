export class api {
  static fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => json);
  }
};