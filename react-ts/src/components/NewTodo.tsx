import React, { useRef } from "react";

const NewTodo = () => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todoTextInput.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInput} />
            <button>Todo 추가하기</button>
        </form>
    );
};

export default NewTodo;
