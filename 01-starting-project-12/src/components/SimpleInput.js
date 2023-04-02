import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const nameInputBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        // nameInputRef.current.value = ""; 이 방법은 직접적으로 DOM을 바꾸기 때문에 지양하는게 좋다. 리액트를 사용해 돔을 조작하도록 한다.
        setEnteredName("");
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

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
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
