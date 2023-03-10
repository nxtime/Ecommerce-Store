import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";
import { Link } from "../utils/link.js";
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.render = function (filter) {
        var container = new Container({
            variant: {
                type: "flex",
                direction: 'row',
                align: 'center'
            },
            className: " home-container",
            children: [
                new Element({ as: 'span' }),
                new Container({
                    variant: {
                        type: "flex",
                        direction: 'col',
                        gap: '2',
                        align: 'center'
                    },
                    children: [
                        new Element({
                            as: 'h1',
                            content: 'Fashion up your look',
                            attr: {
                                "class": 'text-6xl text-neutral'
                            }
                        }),
                        new Container({
                            variant: {
                                type: "flex",
                                gap: "2",
                                align: "center",
                                justify: "center"
                            },
                            className: "text-neutral",
                            children: [
                                new Link({
                                    label: 'Shop now',
                                    className: 'btn btn-accent',
                                    to: "/products"
                                }),
                                new Link({
                                    label: 'Whats trending?',
                                    className: '',
                                    to: '/promotion'
                                })
                            ]
                        })
                    ]
                })
            ]
        });
        return container;
    };
    Home.effect = function () {
        console.log("new State", this.state);
    };
    Home.state = {
        counter: 0
    };
    return Home;
}());
export { Home };
