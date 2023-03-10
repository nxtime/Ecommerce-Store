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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Element } from './element.js';
var styles = function (className, variant) {
    if (variant.type === 'flex')
        className = "".concat(className, " flex ").concat(variant.direction === 'col' ? 'flex-col' : '');
    if (variant.type === 'grid')
        className = "".concat(className, " grid grid-").concat(variant.direction);
    if (variant.justify)
        className += " justify-".concat(variant.justify);
    if (variant.align)
        className += " align-".concat(variant.align);
    if (variant.gap)
        className += " gap-".concat(variant.gap);
    return className;
};
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(_a) {
        var _b = _a.as, as = _b === void 0 ? 'div' : _b, _c = _a.variant, variant = _c === void 0 ? {
            type: 'flex',
            direction: 'col',
            gap: '2'
        } : _c, _d = _a.attr, attr = _d === void 0 ? {} : _d, _e = _a.className, className = _e === void 0 ? '' : _e, children = _a.children;
        var _this = _super.call(this, {
            as: as,
            attr: __assign(__assign({}, attr), { "class": styles(className, variant) })
        }) || this;
        if (children) {
            children.forEach(function (child) {
                _this.element.appendChild(child.element);
            });
        }
        return _this;
    }
    Container.prototype.append = function (children) {
        var _this = this;
        children.forEach(function (child) {
            _this.element.appendChild(child.element);
        });
    };
    return Container;
}(Element));
export { Container };
