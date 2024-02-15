import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Contacts from "./routes/Contacts.jsx";
import Contact from "./routes/Contact.jsx";
import Company from "./routes/Company.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/contacts/:id",
                element: <Contact />,
                loader: async ({ params }) =>
                await fetch("/contacts.json").then((resp) => resp.json()).then(resp => resp[params.id])
            },
            {
                path: "/company",
                element: <Company />,
                loader: () => {
                    throw new Error("Deu ruim")
                },
                errorElement: <div>Deu ruim</div>,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
