import React from "react";
import "./Blog.scss";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import up from "../../assets/up.png";
function Blog() {
  return (
    <div className="container">
      <div className="route">
        <p>
          Главная <b>/ Блог</b>
        </p>
      </div>
      <div className="blog">
        <h1>Блог</h1>
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
      </div>
    </div>
  );
}

export default Blog;
