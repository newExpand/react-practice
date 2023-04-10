import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    const error = useRouteError();

    let title = "오류가 발생했습니다.";
    let message = "단단히 잘못됐습니다.";

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "찾을 수 없습니다.";
        message = "리소스 또는 페이지를 찾을 수 없습니다.";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
};

export default ErrorPage;
