import React from "react";
import './mainSection.css';

const MainSection = () => {
  return (
    <>
      <div className="container">
        <div className="product-image">iamge</div>

        <div className="mainSection">
          <h2 className="gameName"><span className="gamespan">Game Name</span></h2>
          <div className="gamePrice">Game Price</div>
          <div className="gameDescription">Description</div>
          <div className="details">Know more</div>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
};
export default MainSection;
