import React, { useState } from "react";
import "./Main.css";
import Boots1 from "../assets/boots1.png";
import Boots2 from "../assets/boots2.png";
import Boots3 from "../assets/boots3.png";
import Boots4 from "../assets/boots4.png";
import AddToCart from "./AddToCart";

const Main = () => {
  const [activeImage, setActiveImage] = useState(Boots1);
  return (
    <main>
      <div className="left">
        <div
          style={{ backgroundImage: `url(${activeImage})` }}
          className="active_image"
        ></div>
        <div className="bottom">
          {/* prettier-ignore */}
          <div onClick={()=>{setActiveImage(Boots1)}} className={`small_image ${activeImage===Boots1 && 'active'}`} style={{ backgroundImage: `url(${Boots1})` }}></div>
          {/* prettier-ignore */}
          <div onClick={()=>{setActiveImage(Boots2)}} className={`small_image ${activeImage===Boots2 && 'active'}`} style={{ backgroundImage: `url(${Boots2})` }}></div>
          {/* prettier-ignore */}
          <div onClick={()=>{setActiveImage(Boots3)}} className={`small_image ${activeImage===Boots3 && 'active'}`} style={{ backgroundImage: `url(${Boots3})` }}></div>
          {/* prettier-ignore */}
          <div onClick={()=>{setActiveImage(Boots4)}} className={`small_image ${activeImage===Boots4 && 'active'}`} style={{ backgroundImage: `url(${Boots4})` }}></div>
        </div>
      </div>
      
    </main>
  );
};

export default Main;
