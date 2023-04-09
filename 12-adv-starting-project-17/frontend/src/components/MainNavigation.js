import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    const navActiveHandler = ({ isActive }) => {
        return isActive ? classes.active : undefined;
    };

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={navActiveHandler} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={navActiveHandler}>
                            Events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
