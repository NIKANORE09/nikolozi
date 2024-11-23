import React, { useState } from "react";
import "./AddToCart.css";

const AddToCart = (props) => {
  const [sneakers, setSneakers] = useState(0);
  const increas = () => {
    setSneakers(sneakers + 1);
  };
  const decreas = () => {
    if (sneakers > 0) {
      setSneakers(sneakers - 1);
    }
  };
  const AddToCart = () => {
    props.setCount((prev) => prev + sneakers);
    setSneakers(0);
  };
  return (
    <div className="addtocart">
      <div className="right">
        <p>Sneaker Company</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <span className="span">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </span>
        <h2>$125.00</h2>

        <h5 style={{ color: "gray" }}>$250.00</h5>
        <div className="ATC">
          <plsmns
            className="plsmns"
            style={{
              fontSize: "36px",
              display: "flex",
              alignItems: "center",
              userselect: "none",
            }}
          >
            <span
              onClick={decreas}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                userselect: "none",
                color: "#ff7e1b",
              }}
              className="plsmns"
            >
              -
            </span>
            <span className="plsmns" style={{ backgroundColor: "transparent" }}>
              {sneakers}
            </span>
            <span
              onClick={increas}
              style={{
                cursor: "pointer",
                color: "#ff7e1b",
                userselect: "none",
                backgroundColor: "transparent",
              }}
              className="plsmns"
            >
              +
            </span>
          </plsmns>
          <button onClick={AddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
