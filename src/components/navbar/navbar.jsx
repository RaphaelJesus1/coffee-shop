import React from "react";
import Carticon from "../../components/navbar/cart/cart-icon";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar-container-anchor">
      <div className="navbar">
        <div className="title">
          <h3>CoffeeRoasters</h3>
        </div>
        <div className="content">
          <a href="#">Home</a>
          <a href="#">About Us</a>

          <div className="cart">
            <button className="cart-button">
              <span className="icon">
                <Carticon />
              </span>
              <span className="title-cart">Cart</span>
              <span className="cart-badge">0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
