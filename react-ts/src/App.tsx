import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const todos = [new Todo("리액트 배우기"), new Todo("타입스크립트 배우기")];

    return (
        <div>
            <Todos items={todos} />
        </div>
    );
}

export default App;
