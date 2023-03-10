var api = /** @class */ (function () {
    function api() {
    }
    api.fetchProducts = function () {
        return fetch('https://fakestoreapi.com/products')
            .then(function (res) { return res.json(); })
            .then(function (json) { return json; });
    };
    return api;
}());
export { api };
;
