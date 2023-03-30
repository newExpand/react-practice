import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>리액트 맛집</h1>
                <button>장바구니</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="" />
            </div>
        </Fragment>
    );
};

export default Header;
