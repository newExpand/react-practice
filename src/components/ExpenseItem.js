import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} month={props.month} year={props.year} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}만원</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
