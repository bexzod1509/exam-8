import React from "react";
import "./Catalog.scss";
import right from "../../assets/right.png";
import rightgray from "../../assets/rightgray.png";
import catalog1 from "../../assets/catalog1.png";
import catalog2 from "../../assets/catalog2.png";
import catalog3 from "../../assets/catalog3.png";
import catalog4 from "../../assets/catalog4.png";
import catalog5 from "../../assets/catalog5.png";
import catalog6 from "../../assets/catalog6.png";
import { NavLink } from "react-router-dom";
function Catalog() {
  return (
    <div className="container">
      <div style={{ marginTop: "97px" }} className="b2">
        <h1>Каталог</h1>
        <NavLink to={"/catalog"}>
          <p>Весь каталог</p>
          <img src={right} alt="" />
        </NavLink>
      </div>
      <div className="b3">
        <div className="b4">
          <div>
            <h1>Люстры</h1>
            <div className="b5">
              <p>От 540₽</p>
              <img src={rightgray} alt="" />
            </div>
          </div>
          <img width={220} height={206} src={catalog1} alt="" />
        </div>
        <div className="b4">
          <div>
            <h1>Светильники</h1>
            <div className="b5">
              <p>От 540₽</p>
              <img src={rightgray} alt="" />
            </div>
          </div>
          <img width={220} height={206} src={catalog2} alt="" />
        </div>
        <div className="b4">
          <div>
            <h1>Бра</h1>
            <div className="b5">
              <p>От 540₽</p>
              <img src={rightgray} alt="" />
            </div>
          </div>
          <img width={220} height={206} src={catalog3} alt="" />
        </div>
        <div className="b4">
          <div>
            <h1>Торшеры</h1>
            <div className="b5">
              <p>От 540₽</p>
              <img src={rightgray} alt="" />
            </div>
          </div>
          <img width={220} height={206} src={catalog4} alt="" />
        </div>
        <div className="b4">
          <div>
            <h1>Настольные</h1>
            <div className="b5">
              <p>От 540₽</p>
              <img src={rightgray} alt="" />
            </div>
          </div>
          <img width={220} height={206} src={catalog5} alt="" />
        </div>
        <div className="b4">
          <div>
            <h1>Споты</h1>
            <div className="b5">
              <p>От 540₽</p>
              <img src={rightgray} alt="" />
            </div>
          </div>
          <img width={220} height={206} src={catalog6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
