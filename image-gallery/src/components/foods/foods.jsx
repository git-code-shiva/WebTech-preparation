import React from "react";
import Card from "../card";
import "./foods.css"

const Foods = () => {
    return (
        <>
            <section className="foods-container">
                <h3>Food Pictures</h3>

                <section className="foods-images">
                    <Card search={"food"} />
                </section>
            </section>

        </>
    )
}

export default Foods;