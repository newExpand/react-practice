import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput 실행");
    return <MyParagraph>{props.show ? "발작한 글입니다~!" : ""}</MyParagraph>;
};

/* 
    불필요한 렌더링을 위해 React.memo를 사용하는 방법이 있는데, 
    이는 함수형 컴포넌트에서만 사용 가능하다.(클래스 기반 사용 불가)

    React.memo : 
    React.memo는 인자로 들어간 컴포넌트에 어떤 props가 입력되는지 확인하고 입력되는 모든
    props의 신규 값을 확인한 뒤 이를 기존의 props의 값과 비교하도록 리액트에게 전달한다.
    그리고 props의 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가하게 된다.
    부모 컴포넌트가 변경되었지만 컴포넌트의 props 값이 바뀌지 않았다면 컴포넌트 실행은 건너뛴다.
 */
export default React.memo(DemoOutput);
