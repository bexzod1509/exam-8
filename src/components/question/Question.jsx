import React from "react";
import "./Question.scss";
import right from "../../assets/right.png";
import question1 from "../../assets/question1.png";
import question2 from "../../assets/question2.png";
import question3 from "../../assets/question3.png";
import question4 from "../../assets/question4.png";
import { NavLink } from "react-router-dom";
function Question() {
  return (
    <div className="container">
      <div style={{ marginTop: "50px" }} className="b2">
        <h1>Почему NORNLIGHT?</h1>
        <NavLink to={"/about"}>
          <p>О компании</p>
          <img src={right} alt="" />
        </NavLink>
      </div>
      <div className="c">
        <div className="c1">
          <img src={question1} alt="" />
          <h1>Только проверенные бренды</h1>
          <p>Бренды, проверенные временем и качеством</p>
        </div>
        <div className="c1">
          <img className="c2" src={question2} alt="" />
          <h1>Самые низкие цены</h1>
          <p>Ниже не будет нигде</p>
        </div>
        <div className="c1">
          <img className="c2" src={question3} alt="" />
          <h1>Быстрая доствка</h1>
          <p>Доставляем по всей РФ за 1-10 дней</p>
        </div>
        <div className="c1">
          <img src={question4} alt="" />
          <h1>Большой ассортимент</h1>
          <p>Более 1000 товаров</p>
        </div>
      </div>
      <div style={{ marginTop: "80px" }} className="b2">
        <h1>Популярные товары</h1>
        <NavLink to={"/all"}>
          <p>Все товары</p>
          <img src={right} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default Question;
