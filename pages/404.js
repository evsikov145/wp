import Error from "../components/error/Error";
import React from "react";

export default function ErrorPage(){
    return (
        <Error statusCode={404}/>
    )
}