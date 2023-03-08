var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { actionMenu, navlinks } from "../../data/header.js";
import { Container } from "../../utils/container.js";
import { Link } from "../../utils/link.js";
import { Notification } from "../organism/notification.js";
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.updateState = function (state) {
        Header.state = state;
        Header.effect();
    };
    Header.updateState = function (state) {
        Header.state = state;
        Header.effect();
    };
    Header.effect = function () {
        console.log("new State", this.state);
        this.render();
    };
    Header.render = function () {
        var logo = new Link({
            label: "Ecommerce",
            to: "/",
            className: "text-2xl font-bold"
        });
        var navlinksContainer = new Container({
            as: 'ul',
            variant: {
                type: 'flex',
                direction: 'row',
                gap: '4'
            },
            children: navlinks.map(function (link) {
                return new Link({
                    label: link.label,
                    className: "navlink",
                    to: link.path
                });
            })
        });
        var actionMenuContainer = new Container({
            as: 'ul',
            variant: {
                type: 'flex',
                direction: 'row',
                align: 'center',
                gap: '4'
            },
            children: __spreadArray(__spreadArray([], actionMenu.map(function (link) {
                return new Link({
                    label: link.label,
                    className: link.className,
                    to: link.path
                });
            }), true), [
                new Notification()
            ], false)
        });
        Header.container = new Container({
            as: "header",
            variant: {
                type: 'flex',
                direction: 'row',
                align: 'center',
                gap: '8'
            },
            className: "header-container",
            children: [logo,
                new Container({
                    variant: {
                        type: 'flex',
                        direction: 'row',
                        justify: 'between',
                        align: 'center',
                        gap: '2'
                    },
                    className: 'w-full',
                    children: [navlinksContainer, actionMenuContainer]
                })
            ]
        });
        return Header.container;
    };
    return Header;
}());
export { Header };
