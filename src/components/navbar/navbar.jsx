import React from "react";
import Carticon from "../../assets/icons/cart-icon";
import "./navbar.css";

const navbar = (props) => {
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
            <button className="cart-button"
             onClick={() => props.setIsModalOpen && props.setIsModalOpen(true)}>
              <span className="icon">
                <Carticon />
              </span>
              <span className="title-cart">Cart</span>
              <span className="cart-badge">{props.numberOfItems}</span>
            </button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default navbar;
