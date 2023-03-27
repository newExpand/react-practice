import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">등록된 지출이 없습니다.</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
            ))}
        </ul>
    );
};

export default ExpensesList;
