import React from "react";
import Header from "../header/header";
import './cart.css'

const Cart = () => {
  return (
    <>
      <Header/>
      <div className="cart-container">
        <header className="cart-header-cart">Cart</header>
        <div className="main-cart">
          <div className="sec-name">
            <label>Item Name</label>
            <div className="game-name">Item Name coming..</div>
          </div>

          <div className="sec-price">
            <label>Price</label>
            <div className="game-price">Price comiing</div>
          </div>
        </div>
        <button className="pay-btn">Pay Now</button>
      </div>
    </>
  );
};
export default Cart;
