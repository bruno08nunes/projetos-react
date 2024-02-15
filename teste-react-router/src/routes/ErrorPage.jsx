import React from "react";
import { useRouteError } from "react-router-dom";
import Error404 from "./Error404";



const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            {error.status === 404 ? (
                <Error404 />
            ) : (
                <>
                    <h1>Ooops!</h1>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </>
            )}
        </div>
    );
};

export default ErrorPage;
