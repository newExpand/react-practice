import { createStore } from "redux";

const initialState = {
    count: 0,
    showCounter: true,
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "INCREASE":
            return { ...state, count: state.count + action.amount };
        case "TOGGLE":
            return { ...state, showCounter: !state.showCounter };
        default:
            return state;
    }
};

const store = createStore(counter);

export default store;
