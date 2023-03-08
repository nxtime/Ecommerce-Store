// import { Element } from "../utils/element.js";
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
export function useState(initialState, context) {
    var state = initialState;
    setState(initialState);
    function setState(newState) {
        var _a;
        if (typeof newState === "function") {
            state = newState(state);
        }
        else {
            state = newState;
        }
        if (context) {
            context.state = __assign(__assign({}, context.state), (_a = {}, _a[context.key] = state, _a));
            context.effect();
        }
        return state;
    }
    function currentState() {
        return state;
    }
    return [currentState, setState];
}
