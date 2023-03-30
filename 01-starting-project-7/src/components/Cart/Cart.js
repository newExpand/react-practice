import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "스시", amount: 2, price: 44000 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>총 금액</span>
                <span>44000</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>닫기</button>
                <button className={classes.button}>주문하기</button>
            </div>
        </div>
    );
};

export default Cart;
