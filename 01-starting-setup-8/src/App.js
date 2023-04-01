import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
    /* 동작원리

    state 변경이나 props 변경, 또는 컨텍스트 변경은 컴포넌트 함수를 다시 실행시킨다.
    그 사실은 클릭시 state가 변경되는 발작버튼을 클릭함으로써 console.log("실행중")이 매번 콘솔창에 찍히는것으로 확인할 수 있다.

    */
    const [showParagraph, setShowParagraph] = useState(false);

    console.log("실행중");

    const toggleParagraphHandler = () => {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    };

    return (
        <div className="app">
            <h1>헤이 안뇽안뇽!</h1>
            {showParagraph && <p>발작한 글입니다~!</p>}
            <Button onClick={toggleParagraphHandler}>발작버튼</Button>
        </div>
    );
}

export default App;
