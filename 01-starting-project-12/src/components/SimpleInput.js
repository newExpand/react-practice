import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: EmailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        // nameInputRef.current.value = ""; 이 방법은 직접적으로 DOM을 바꾸기 때문에 지양하는게 좋다. 리액트를 사용해 돔을 조작하도록 한다.

        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
    const emailInputClasses = EmailInputHasError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    value={enteredName}
                    type="text"
                    id="name"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputHasError && <p className="error-text">이름이 비어있습니다.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    value={enteredEmail}
                    type="email"
                    id="email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                />
                {EmailInputHasError && <p className="error-text">이메일이 비어있거나 @가 빠져있습니다.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
