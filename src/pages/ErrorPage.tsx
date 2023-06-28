import React from "react";
import PageContent from "../components/PageContent/PageContent";

import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

interface erroType {
    status: number,
    message: string
}
const ErrorPage = () => {
    //   const error:erroType = useRouteError();

    let title = "An Error Occured";
    let message = "something went wrong";

    //   console.warn("errror ", error);
    //   if (error.status === 500) {
    //     // message = JSON.parse(error.data).message;
    //     message = error.data.message;
    //   }
    //   if (error.status === 404) {
    //     title = "Not Found!";
    //     message = "Could not find resource or page";
    //   }
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