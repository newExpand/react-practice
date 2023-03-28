import React from "react";

const AddUser = (props) => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">이름</label>
            <input type="text" id="username" />
            <label htmlFor="age">나이</label>
            <input type="text" id="age" />
            <button type="submit">유저 추가하기</button>
        </form>
    );
};

export default AddUser;
