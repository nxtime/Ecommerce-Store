import { Home } from "./home.js";
import { Products } from "./products.js";
export var pages = [
    {
        id: 'home',
        path: '/',
        component: Home,
        info: {
            title: 'Home',
            description: 'This is the home page'
        }
    },
    {
        id: 'products',
        path: '/products',
        component: Products,
        info: {
            title: 'Products',
            description: 'This is the products page'
        }
    }
];
