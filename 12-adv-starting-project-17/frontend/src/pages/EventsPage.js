import React from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

// const DUMMY = [
//     { id: "1", image: "", title: "냠냠", date: "2023-04-10" },
//     { id: "2", image: "", title: "쩝쩝", date: "2023-04-12" },
// ];

const Eventspage = () => {
    const data = useLoaderData();

    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }

    const events = data.events;

    return <EventsList events={events} />;
};

export default Eventspage;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        // return { isError: true, message: "이벤트데이터를 가져올 수 없습니다." };
    }

    // const resData = await response.json();
    // const res = new Response("아무 데이터", { status: 201 });

    return response;
};
