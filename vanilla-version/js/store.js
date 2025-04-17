const initialValue = {
  moves: [],
};
export default class Store {
  #state = initialValue;

  constructor() {}

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFunc) {
    const previousState = this.#getState();
    let newState;

    switch (typeof stateOrFunc) {
      case "function":
        newState = stateOrFunc(previousState);
        break;
      case "object":
        newState = stateOrFunc;
        break;
      default:
        throw new Error("Invalid Argument Passed to saveState Function");
    }

    this.#state = newState;
  }
}
