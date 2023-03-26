import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const titleChangeHandler = (e) => {
        // setEnteredTitle(e.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: e.target.value,
        });
    };

    const amountChangeHandler = (e) => {
        // setEnteredAmount(e.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value,
        });
    };

    const dateChangeHandler = (e) => {
        // setEnteredDate(e.target.value);
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>제목</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>금액</label>
                    <input type="number" min="1" step="1" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">추가하기</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
