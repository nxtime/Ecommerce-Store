import { useState } from "../hooks/useState.js";
var Element = /** @class */ (function () {
    function Element(_a) {
        var element = _a.element, content = _a.content, attributes = _a.attributes, events = _a.events;
        var el = document.createElement(element);
        this.content = content;
        if (attributes) {
            for (var key in attributes) {
                el.setAttribute(key, attributes[key]);
            }
        }
        if (events) {
            events.forEach(function (event) {
                el.addEventListener(event.type, event.listener);
            });
        }
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
