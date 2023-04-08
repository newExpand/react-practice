import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    const navActiveHandler = ({ isActive }) => {
        return isActive ? classes.active : undefined;
    };

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={navActiveHandler}
                            style={({ isActive }) => ({
                                textAlign: isActive ? "center" : "left",
                            })}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={navActiveHandler}>
                            상품
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
