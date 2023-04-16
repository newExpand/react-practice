import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
    // const [visible, setVisible] = useState(true);

    // const deleteListHandler = () => {
    //     setVisible((prev) => !prev);
    // };
    return (
        <li onClick={props.onRemoveTodo} className={classes.item}>
            {props.text}
        </li>
    );
};

export default TodoItem;
