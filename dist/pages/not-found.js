import { Container } from "../utils/container.js";
import { Element } from "../utils/element.js";
import { Link } from "../utils/link.js";
var NotFound = /** @class */ (function () {
    function NotFound() {
    }
    NotFound.render = function () {
        var title = new Element({
            as: 'h1',
            content: 'Not found',
            attr: {
                "class": 'text-4xl'
            }
        });
        var container = new Container({
            variant: {
                type: 'flex',
                gap: '2',
                justify: 'center',
                align: 'center'
            },
            children: [title, new Link({
                    label: 'Voltar',
                    to: '/',
                    className: 'btn'
                })]
        });
        return container;
    };
    return NotFound;
}());
export { NotFound };
