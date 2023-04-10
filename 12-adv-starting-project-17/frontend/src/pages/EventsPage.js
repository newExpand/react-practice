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

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) throw new Error("데이터를 받아오지 못했습니다");

    const resData = await response.json();

    return resData.events;
};
