import { api } from "../api/index.js";
import { MOCK_DATA } from "../data/products.js";
var productsStore = /** @class */ (function () {
    function productsStore() {
    }
    productsStore.prototype.fetchProducts = function () {
        productsStore.isFetching = true;
        api.fetchProducts().then(function (products) {
            productsStore.products = products;
            productsStore.isFetching = false;
        });
    };
    productsStore.prototype.addCallback = function (callback) {
        this.fns.push(callback);
    };
    productsStore.prototype.callback = function () {
        this.fns.forEach(function (fn) { return fn(); });
    };
    productsStore.prototype.add = function (product) {
        var newProduct = {
            id: productsStore.products.length + 1,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            categories: ["Dress"],
            image: "https://i.pravatar.cc/150?img=1"
        };
        productsStore.products.push(newProduct);
        this.callback();
    };
    productsStore.categories = function (category) {
        if (category === "all")
            return productsStore.products.length;
        return productsStore.products.filter(function (product) { return product.categories.includes(category); }).length;
    };
    productsStore.prototype.remove = function (id) {
        productsStore.products = productsStore.products.filter(function (product) { return product.id !== id; });
        this.callback();
    };
    productsStore.products = MOCK_DATA;
    productsStore.isFetching = false;
    return productsStore;
}());
export { productsStore };
