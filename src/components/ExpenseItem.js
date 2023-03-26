import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023, 2, 28);
    const expenseTitle = "차 보험";
    const expenseAmount = 29;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}만원</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
