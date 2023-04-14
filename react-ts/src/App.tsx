import React from "react";
import Todos from "./components/Todos";

function App() {
    return (
        <div>
            <Todos items={["리액트 배우기", "타입스크립트 배우기"]} />
        </div>
    );
}

export default App;
