import React from "react";
import classes from "./Main.module.scss"

const Main = ({main}) => {
    return (
        <>
            <div className={classes.title}>
                <h1>{main.profession}</h1>
                <h2>{main.name}</h2>
                <button>{main.btnText}</button>
            </div>
        </>
    )
}

export default Main;