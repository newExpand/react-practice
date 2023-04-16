import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const todos = [new Todo("리액트 배우기"), new Todo("타입스크립트 배우기")];

    const addTodoHandler = (todoText: string) => {};

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </div>
    );
}

export default App;
