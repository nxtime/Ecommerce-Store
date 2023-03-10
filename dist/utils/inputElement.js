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
import { Element } from "./element.js";
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(_a) {
        var callback = _a.callback, customClass = _a.customClass, _b = _a.value, value = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, attr = _a.attr;
        var _this = _super.call(this, {
            as: 'input',
            attr: __assign({ type: 'text', value: value, "class": customClass ? customClass : 'input ' + className }, attr)
        }) || this;
        if (callback) {
            _this.element.addEventListener('change', callback);
        }
        return _this;
    }
    return Input;
}(Element));
export { Input };
