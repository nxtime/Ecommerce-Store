var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Element } from './element.js';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(_a) {
        var onClick = _a.onClick, _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d;
        return _super.call(this, {
            element: 'button',
            content: "<span>".concat(text, "</span>"),
            attributes: { type: type, "class": 'btn ' + className },
            events: [{ type: 'click', listener: onClick }]
        }) || this;
    }
    Button.prototype.updateState = function (state) {
        this.element.innerHTML = "<span>".concat(state, "</span>");
    };
    Button.prototype.onClick = function (fn) {
        this.element.addEventListener('click', fn);
    };
    return Button;
}(Element));
export { Button };
