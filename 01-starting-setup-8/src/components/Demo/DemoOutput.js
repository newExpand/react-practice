import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput 실행");
    return <MyParagraph>{props.show ? "발작한 글입니다~!" : ""}</MyParagraph>;
};

export default DemoOutput;
