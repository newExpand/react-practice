import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    /* 동작원리

    1. state 변경이나 props 변경, 또는 컨텍스트 변경은 컴포넌트 함수를 다시 실행시킨다.
    그 사실은 클릭시 state가 변경되는 발작버튼을 클릭함으로써 console.log("실행중")이 
    매번 콘솔창에 찍히는것으로 확인할 수 있다.

    클릭시 p태그로 이루어진 글이 생성 됐을때와 제거되었을 때 개발자 도구를 확인하면
    실제 DOM을 통한 업데이트는 가상 스냅샷 간의 차이점만 반영되었다.


    2. 컴포넌트를 <DemoOutput show={showParagraph} /> 이런식으로 분리하여 p태그는 계속 존재하나
    안에 텍스트만 넣었다 빼는 형식이라 해도 console.log("실행중"); 이 계속 콘솔에 찍히는걸로 보아
    App() 컴포넌트 역시 다시 실행된다는 것을 알 수 있다.

    3. 그렇다고 props로 값을 넘겨야지만 재실행 하는건 아니다. 
    부모 컴포넌트 함수가 재실행되면 자식 컴포넌트도 재실행이 되는 것이다.
    물론 DemoOutput이 재실행된다고 해서 실제 DOM이 변경되는것은 아니다.

    4. 컴포넌트가 재실행되면 이의 모든 자식 컴포넌트들 역시 재실행, 재평가 된다.
    따라서 DemoOutput 컴포넌트만 아니고 버튼 역시 재평가 된다. 또한 컴포넌트 안에 있는 컴포넌트도 재평가 된다.

    5. 그렇다면 연결된 모든 컴포넌트 함수가 재실행된다면 괜찮은 걸까? 성능에 영향을 미치진 않을까?
    이러한 과정에서 자식 컴포넌트가 불필요하게 다시 렌더링되는 경우가 발생할 수 있지만 성능에는 큰 영향을 미치지 않는다.
    왜냐하면 리액트는 가상돔을 활용하여 변경된 부분만을 최소한으로 업데이트 하기 때문이다.
    그러나 자식 컴포넌트가 많은 경우, 불필요한 렌더링이 발생하면 성능에 영향을 미칠 수 있다.
    이를 방지하기 위해 React.memo와 같은 방법을 사용하여 불필요한 렌더링을 최소화할 수 있다.


    */
    const [showParagraph, setShowParagraph] = useState(false);

    const toggleParagraphHandler = () => {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    };

    return (
        <div className="app">
            <h1>헤이 안뇽안뇽!</h1>
            <DemoOutput show={false} />
            <Button onClick={toggleParagraphHandler}>발작버튼</Button>
        </div>
    );
}

export default App;
