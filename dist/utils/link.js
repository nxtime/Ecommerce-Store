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
import { Router } from '../routes/index.js';
import { Element } from './element.js';
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(_a) {
        var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.to, to = _d === void 0 ? '/' : _d, onClick = _a.onClick;
        return _super.call(this, {
            element: 'a',
            content: label,
            attributes: { href: to, "class": className },
            events: [{
                    type: 'click', listener: function (e) {
                        e.preventDefault();
                        Router.navigate(to);
                        if (onClick)
                            onClick(e);
                    }
                }]
        }) || this;
    }
    return Link;
}(Element));
export { Link };
