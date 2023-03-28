import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    return (
        <div>
            <ErrorModal title="에러 발생" message="무언가 단단히 잘못됨" />
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">이름</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">나이</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">유저 추가하기</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
