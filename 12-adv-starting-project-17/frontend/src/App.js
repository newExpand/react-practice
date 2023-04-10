// Challenge / Exercise

// 1. 새로운 다섯 개의 페이지 컴포넌트를 추가하십시오 (내용은 간단한 <h1> 요소일 수 있습니다).
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. 다섯 개의 페이지에 대한 라우팅 및 라우트 정의를 추가하세요.
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. 루트 레이아웃을 추가하여 모든 페이지 컴포넌트 위에 <MainNavigation> 컴포넌트를 추가합니다.
// 4. MainNavigation에 제대로 작동하는 링크를 추가합니다.
// 5. MainNavigation의 링크가 활성화될 때 "active" 클래스를 받도록합니다.
// 6. 더미 이벤트 목록을 EventsPage에 출력합니다.
//    각 리스트 항목은 각각의 EventDetailPage에 대한 링크를 포함해야합니다.
// 7. EventDetailPage에서 선택한 이벤트의 ID를 출력합니다.
// BONUS : 모든 /events... 페이지 컴포넌트 위에 <EventNavigation> 컴포넌트를 추가하는 또 다른 (중첩) 레이아웃 경로를 추가합니다.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventRoot from "./pages/EventRoot";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as eventDetailAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventRoot />,
                children: [
                    { index: true, element: <EventsPage />, loader: eventsLoader },
                    {
                        path: ":pageId",
                        id: "event-detail",
                        loader: eventDetailLoader,
                        children: [
                            { index: true, element: <EventDetailPage />, action: eventDetailAction },
                            { path: "edit", element: <EditEventPage /> },
                        ],
                    },
                    { path: "new", element: <NewEventPage />, action: newEventAction },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
