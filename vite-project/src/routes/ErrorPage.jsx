import React, { useState } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oooops!</h1>
            <p>Um erro ocorreu.</p>
            <p>
                <i>{error.statusText}</i>
                <b>{error.message}</b>
            </p>
        </div>
    );
};

export default ErrorPage;
