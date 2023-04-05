import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        increase(state, action) {
            state.count = state.count + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
