import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Contact = () => {
    const pessoa = useLoaderData();
    console.log(useLoaderData())
    return (
        <div>
            <h1>{pessoa.nome}</h1>
        </div>
    );
};

export default Contact;
