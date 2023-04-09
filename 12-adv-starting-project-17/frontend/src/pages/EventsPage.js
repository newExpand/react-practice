import React from "react";
import EventsList from "../components/EventsList";

const Eventspage = ({ events }) => {
    return (
        <>
            <EventsList events={events} />
        </>
    );
};

export default Eventspage;
