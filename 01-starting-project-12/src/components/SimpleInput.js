import { useEffect, useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const nameInputBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };

    const emailInputChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const emailInputBlurHandler = (e) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        // nameInputRef.current.value = ""; 이 방법은 직접적으로 DOM을 바꾸기 때문에 지양하는게 좋다. 리액트를 사용해 돔을 조작하도록 한다.
        setEnteredName("");
        setEnteredEmail("");
        setEnteredNameTouched(false);
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
    const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    value={enteredName}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && <p className="error-text">이름이 비어있습니다.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    value={enteredEmail}
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                {emailInputIsInvalid && <p className="error-text">이메일이 비어있거나 @가 빠져있습니다.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
