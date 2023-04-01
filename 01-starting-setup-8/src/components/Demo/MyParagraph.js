import React from "react";

const MyParagraph = (props) => {
    console.log("MyParagraph 실행");
    return <p>{props.children}</p>;
};

export default MyParagraph;
