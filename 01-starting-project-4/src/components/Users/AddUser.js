import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">이름</label>
                <input type="text" id="username" />
                <label htmlFor="age">나이</label>
                <input type="text" id="age" />
                <Button type="submit">유저 추가하기</Button>
            </form>
        </Card>
    );
};

export default AddUser;
