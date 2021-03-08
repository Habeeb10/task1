import "./header.css";
import React from "react";
import Rectangle from "../../Rectangle.svg";
import Rectangle1 from "../../Rectangle1.svg";
import Rectangle2 from "../../Rectangle2.svg";
import Rectangle3 from "../../Rectangle3.svg";

const Header = () => {
  return (
    <div className="container">
      <form>
        <input className="rem" type="checkbox" />
        <label>Tech Ecommerce App Presentation</label>
      </form>
      <div className="con">
        <h1 className="tech">Tech Ecommerce App</h1>
        <h2 className="free"> Free UI kit</h2>

        <div className="img1">
          <img className="con1" src={Rectangle} alt="rectangle.svg/" />
          <img className="con2" src={Rectangle1} alt="rectangle1.svg/" />
          <img className="con3" src={Rectangle2} alt="rectangle2.svg/" />
          <img className="con4" src={Rectangle3} alt="rectangle3.svg/" />
        </div>
      </div>
    </div>
  );
};

export default Header;
