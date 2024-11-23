import React from "react";
import "./Header.css";
import Logo from "../assets/sneakers.png";
import Navigation from "../Navigation";
import Cart from "../assets/cart.png";
import Avatar from "../assets/avatar.png";
const Header = (props) => {
  return (
    <header>
      <img src={Logo} alt="sneakers logo" />
      <Navigation />
      <div>
        <img src={Cart} alt="cart" />
        <span>In cart:{props.count}</span>
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
