import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="개수" input={{ id: props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }} />
            <button>추가하기</button>
        </form>
    );
};

export default MealItemForm;
