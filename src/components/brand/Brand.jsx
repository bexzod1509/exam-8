import React from "react";
import "./Brand.scss";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import left from "../../assets/left.png";
import rightborder from "../../assets/rightborder.png";
function Brand() {
  return (
    <div className="container">
      <div style={{ marginTop: "70px" }} className="b2">
        <h1>Только проверенные бренды</h1>
        <div>
          <img src={left} alt="" />
          <img style={{ marginLeft: "10px" }} src={rightborder} alt="" />
        </div>
      </div>
      <div className="d4">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand1} alt="" />
      </div>
    </div>
  );
}

export default Brand;
