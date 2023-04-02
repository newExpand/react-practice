import { useRef, useState } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;

        console.log(enteredValue);

        nameInputRef.current.value = "";
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
