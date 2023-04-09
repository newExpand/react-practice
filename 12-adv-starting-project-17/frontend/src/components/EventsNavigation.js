import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";

function EventsNavigation() {
    const navActiveHandler = ({ isActive }) => {
        return isActive ? classes.active : undefined;
    };

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="" className={navActiveHandler} end>
                            All Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="new" className={navActiveHandler}>
                            New Event
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default EventsNavigation;
