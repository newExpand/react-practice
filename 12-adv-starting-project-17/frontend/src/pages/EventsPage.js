import React from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

// const DUMMY = [
//     { id: "1", image: "", title: "냠냠", date: "2023-04-10" },
//     { id: "2", image: "", title: "쩝쩝", date: "2023-04-12" },
// ];

const Eventspage = () => {
    const eventsData = useLoaderData();

    return <EventsList events={eventsData} />;
};

export default Eventspage;
