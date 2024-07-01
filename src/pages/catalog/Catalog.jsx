import React from "react";
import "./Catalog.scss";
import BlogComponent from "../../components/blogcomponent/BlogComponent";
import Brand from "../../components/brand/Brand";
import rightgray from "../../assets/rightgray.png";
import catalog1 from "../../assets/catalog1.png";
import catalog2 from "../../assets/catalog2.png";
import catalog3 from "../../assets/catalog3.png";
import catalog4 from "../../assets/catalog4.png";
import catalog5 from "../../assets/catalog5.png";
import catalog6 from "../../assets/catalog6.png";
import catalog7 from "../../assets/catalog7.png";
import catalog8 from "../../assets/catalog8.png";
import catalog9 from "../../assets/catalog9.png";
import catalog10 from "../../assets/catalog10.png";
import catalog11 from "../../assets/catalog11.png";
function Catalog() {
  return (
    <>
      <div className="container">
        <div className="route">
          <p>
            Главная <b>/ Каталог</b>
          </p>
        </div>
        <div className="catalog">
          <h2>Каталог</h2>
          <div className="b3">
            <div className="b4">
              <div>
                <h1>Люстры</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog1} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Светильники</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog2} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Бра</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog3} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Торшеры</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog4} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Настольные</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog5} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Споты</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog6} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Споты</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog7} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Споты</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog8} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Споты</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog9} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Споты</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog10} alt="" />
            </div>
            <div className="b4">
              <div>
                <h1>Споты</h1>
                <div className="b5">
                  <p>От 540₽</p>
                  <img src={rightgray} alt="" />
                </div>
              </div>
              <img className="catalogimg" src={catalog11} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Brand />
      <BlogComponent />
    </>
  );
}

export default Catalog;
