import React from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    const detailData = useLoaderData();

    return <EventItem event={detailData.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
    const id = params.pageId;

    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok)
        throw json({ message: "상세페이지의 데이터를 가져오는데 실패했습니다." }, { status: 500 });

    return response;
};
