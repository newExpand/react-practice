import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const titleChangeHandler = () => {};

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>제목</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>금액</label>
                    <input type="number" min="1" step="1" />
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">추가하기</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
