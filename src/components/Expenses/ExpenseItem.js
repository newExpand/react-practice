import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("업데이트");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} month={props.month} year={props.year} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}만원</div>
            </div>
            <button onClick={clickHandler}>제목 수정</button>
        </Card>
    );
};

export default ExpenseItem;
