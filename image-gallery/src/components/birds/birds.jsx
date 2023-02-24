import React from "react";
import Card from "../card";
import "./birds.css"

const Birds = () => {

    return (
        <>
            <section className="birds-container">
                <h3>Bird Pictures</h3>

                <section className="birds-images">
                    <Card search={"bird"} />
                </section>
            </section>

        </>
    )
}

export default Birds;