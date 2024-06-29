import React from "react";
import "./BlogComponent.scss";
import right from "../../assets/right.png";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import up from "../../assets/up.png";
import { NavLink } from "react-router-dom";
function BlogComponent() {
  return (
    <div className="container">
      <div style={{ marginTop: "100px" }} className="b2">
        <h1>Блог</h1>
        <NavLink to={"/blog"}>
          <p>Перейти в блог</p>
          <img src={right} alt="" />
        </NavLink>
      </div>
      <div className="d5">
        <div className="d6">
          <img className="d8" src={home1} alt="" />
          <div className="d7">
            <h1>Как правильно освещать дом снаружи?</h1>
            <img src={up} alt="" />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="d6">
          <img className="d8" src={home2} alt="" />
          <div className="d7">
            <h1>Как правильно освещать дом снаружи?</h1>
            <img src={up} alt="" />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="d6">
          <img className="d8" src={home3} alt="" />
          <div className="d7">
            <h1>Как правильно освещать дом снаружи?</h1>
            <img src={up} alt="" />
          </div>
          <p>01.01.2024</p>
        </div>
      </div>
      <div className="d9">
        <h1>Производство светильников</h1>
        <p>
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. У нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют.
          <br />
          <br />
          Покупая светильники в нашем интернет-магазине, вы получаете отличное
          соотношение цены и качества. Мы осуществляем доставку по всей России,
          чтобы каждый клиент мог насладиться прекрасным светом и удобством
          покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
          тепла и света с NORNLIGHT!
        </p>
      </div>
    </div>
  );
}

export default BlogComponent;
