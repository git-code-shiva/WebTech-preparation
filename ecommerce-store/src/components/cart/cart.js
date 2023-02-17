import React, { useContext } from "react";
import Header from "../header/header";
import PostContext from "../postView/postContext";
import './cart.css'

const Cart = () => {
  const posts = useContext(PostContext);
  return (
    <>
      <Header/>
      <div className="cart-container">
        <header className="cart-header-cart">Cart</header>
        {posts.map((post, i) => (
          <div key={i} className="main-cart">
            <div className="sec-name">
              <label>Item Name</label>
              <div className="game-name">{post.name}</div>
            </div>
            <div className="sec-price">
              <label>Price</label>
              <div className="game-price">{post.price}</div>
            </div>
          </div>
        ))}
        <button className="pay-btn">Pay Now</button>
      </div>
    </>
  );
};

export default Cart;





