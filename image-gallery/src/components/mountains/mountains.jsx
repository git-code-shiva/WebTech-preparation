import React from "react";
import Card from "../card";
import "./mountains.css"

const Mountains = () => {
    return (
        <>
            <section className="mountains-container">
                <h3>Mountain Pictures</h3>

                <section className="mountains-images">
                <Card search={"mountain"}/>
                </section>
            </section>

        </>
    )
}

export default Mountains;