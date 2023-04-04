import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });

        const formIsValid =
            enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

        if (!formIsValid) return;
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" />
                {!formInputsValidity.name && <p>올바른 이름이 아닙니다.</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.street ? "" : classes.invalid}`}>
                <label htmlFor="street">Street</label>
                <input ref={streetInputRef} type="text" id="street" />
                {!formInputsValidity.street && <p>올바른 거리명이 아닙니다.</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.postalCode ? "" : classes.invalid}`}>
                <label htmlFor="postal">Postal Code</label>
                <input ref={postalCodeInputRef} type="text" id="postal" />
                {!formInputsValidity.postalCode && <p>올바른 우편번호가 아닙니다.</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.city ? "" : classes.invalid}`}>
                <label htmlFor="city">City</label>
                <input ref={cityInputRef} type="text" id="city" />
                {!formInputsValidity.city && <p>올바른 도시이름이 아닙니다.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
