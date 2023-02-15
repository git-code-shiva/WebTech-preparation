import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const gotoCart = () => {
    navigate("/cart");
  };

  const gotoForm = () => {
    navigate("/form");
  };

  const gotoMain = () => {
    navigate("/");
  };
  return (
    <>
      <div className="header-container">
        <div className="header" onClick={gotoMain}>
          Game-store
        </div>
        <div className="add-header" onClick={gotoForm}>
          Add Game
        </div>
        <div className="cart-header" onClick={gotoCart}>
          Cart
        </div>
      </div>

    </>
  );
};
export default Header;
