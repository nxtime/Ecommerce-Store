// import { Element } from "../utils/element.js";

export function useState<T>(initialState: T, context?: any):
  [() => T, (state: T | ((state: T) => void)) => void] {
  let state = initialState;

  setState(initialState);

  function setState(newState: T) {
    if (typeof newState === "function") {
      state = newState(state);
    } else {
      state = newState;
    }

    if (context) {
      context.state = {
        ...context.state,
        [context.key]: state
      };

      context.effect();
    }
    return state;
  }

  function currentState(): any {
    return state;
  }

  return [currentState, setState];
}