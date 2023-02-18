import React from "react";
import { useNavigate } from "react-router-dom";
import './card.css';

const Card = ({post}) => {

  const navigate= useNavigate();
  const handleBuy=()=>{
    navigate(`/cart?name=${post.name}&price=${post.price}`);
  }

  return (
    <>
      <div className="container">
        <div className="product-image">
          <img src={post.postImage} alt="image" />
        </div>

        <div className="mainSection">
          <h2 className="gameName"><span className="gamespan">{post.name}</span></h2>
          <div className="gamePrice">{post.price}</div>
          <div className="gameDescription">{post.description}</div>
          <div className="details">Know more</div>
          <button onClick={handleBuy}>Buy Now</button>
        </div>
      </div>
    </>
  );
};
export default Card;
