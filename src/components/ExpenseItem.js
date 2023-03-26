import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>2023년 3월 28일</div>
            <div className="expense-item__description">
                <h2>차 보험</h2>
                <div className="expense-item__price">29만원</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
