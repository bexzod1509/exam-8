import React from "react";
import "./Hero.scss";
import hero from "../../assets/hero.png";
function Hero() {
  return (
    <div className="b">
      <div className="container">
        <div className="b1">
          <div>
            <h1>Скидка 15% на все подвесные светильники </h1>
            <p>до 5 февраля</p>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
