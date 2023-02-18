import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
// import PostContext from "../postView/postContext";
import './cart.css'

const Cart = () => {
  // const posts = useContext(PostContext);
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const price = new URLSearchParams(location.search).get("price");

  const navigate= useNavigate();
  const handlePay=()=>{
    navigate('/payment_page')
  }
  return (
    <>
      <Header/>
      {/* <PostContext.Consumer> */}
      <div className="cart-container">
        <header className="cart-header-cart">Cart</header>
          <div className="main-cart">
            <div className="sec-name">
              <label><b>Item Name</b></label>
              <div className="game-name">{name}</div>
            </div>
            <div className="sec-price">
              <label><b>Price</b></label>
              <div className="game-price">{price}</div>
            </div>
          </div>
        <button className="pay-btn" onClick={handlePay}>Pay Now</button>
      </div>
      {/* </PostContext.Consumer> */}
    </>
  );
};

export default Cart;





