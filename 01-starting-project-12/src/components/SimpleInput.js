import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log("확인용");
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;

        console.log(enteredValue);

        // nameInputRef.current.value = ""; 이 방법은 직접적으로 DOM을 바꾸기 때문에 지양하는게 좋다. 리액트를 사용해 돔을 조작하도록 한다.
        setEnteredName("");
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    value={enteredName}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                />
                {nameInputIsInvalid && <p className="error-text">이름이 비어있습니다.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
