import { useRef, useState } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        if (enteredName.trim() === "") return;

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;

        console.log(enteredValue);

        // nameInputRef.current.value = ""; 이 방법은 직접적으로 DOM을 바꾸기 때문에 지양하는게 좋다. 리액트를 사용해 돔을 조작하도록 한다.
        setEnteredName("");
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    value={enteredName}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
