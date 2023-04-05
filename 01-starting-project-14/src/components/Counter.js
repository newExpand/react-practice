import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: "INCREMENT" });
    };

    const decrementHandler = () => {
        dispatch({ type: "DECREMENT" });
    };

    const increaseHandler = () => {
        dispatch({ type: "INCREASE", amount: 5 });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: "TOGGLE" });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>증가</button>
                <button onClick={increaseHandler}>5씩 증가</button>
                <button onClick={decrementHandler}>감소</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
