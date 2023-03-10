import { useState } from "../hooks/useState.js";
var Element = /** @class */ (function () {
    function Element(_a) {
        var as = _a.as, content = _a.content, attr = _a.attr, events = _a.events, children = _a.children;
        var el = document.createElement(as);
        this.content = content;
        if (attr) {
            for (var key in attr) {
                el.setAttribute(key, attr[key]);
            }
        }
        if (events) {
            events.forEach(function (event) {
                el.addEventListener(event.type, event.listener);
            });
        }
        if (children) {
            children.forEach(function (child) {
                el.appendChild(child.element);
            });
        }
        ;
        this.element = el;
        this.render();
    }
    Element.prototype.updateState = function (state) {
        this.state = state;
        this.render();
    };
    Element.prototype.useState = function (initialState) {
        return useState(initialState, this);
    };
    Element.prototype.render = function () {
        var _a;
        if (!this.content && !this.state)
            return;
        this.element.innerHTML = (_a = this.state) !== null && _a !== void 0 ? _a : this.content;
        //    return this.state ?? this.content;
    };
    return Element;
}());
export { Element };
