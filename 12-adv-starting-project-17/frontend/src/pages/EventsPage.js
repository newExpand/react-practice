import React, { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";

// const DUMMY = [
//     { id: "1", image: "", title: "냠냠", date: "2023-04-10" },
//     { id: "2", image: "", title: "쩝쩝", date: "2023-04-12" },
// ];

const Eventspage = () => {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>로딩중...</p>}>
            <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>;
        </Suspense>
    );
};

export default Eventspage;

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        // return { isError: true, message: "이벤트데이터를 가져올 수 없습니다." };
        // throw new Response(JSON.stringify({ message: "fetch에 실패했습니다." }), { status: 500 });
        throw json({ message: "fetch에 실패했습니다." }, { status: 500 });
    }

    // const resData = await response.json();
    // const res = new Response("아무 데이터", { status: 201 });

    const resData = await response.json();
    return resData.events;
};

export const loader = () => {
    return defer({
        events: loadEvents(),
    });
};
