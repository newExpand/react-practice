import React, { Suspense } from "react";
import { useParams, json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData("event-detail");

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: "center" }}>로딩중...</p>}>
                <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent} />}</Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: "center" }}>로딩중...</p>}>
                <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
            </Suspense>
        </>
    );
};

export default EventDetailPage;

const loadEvent = async (id) => {
    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json({ message: "상세페이지의 데이터를 가져오는데 실패했습니다." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.event;
    }
};

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        // return { isError: true, message: "이벤트데이터를 가져올 수 없습니다." };
        // throw new Response(JSON.stringify({ message: "fetch에 실패했습니다." }), { status: 500 });
        throw json({ message: "fetch에 실패했습니다." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }

    // const resData = await response.json();
    // const res = new Response("아무 데이터", { status: 201 });
};

export const loader = async ({ request, params }) => {
    const id = params.eventId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    });
};

export const action = async ({ params, request }) => {
    const id = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + id, { method: request.method });

    if (!response.ok) throw json({ message: "삭제 요청에 실패했습니다." }, { status: 500 });

    return redirect("/events");
};
