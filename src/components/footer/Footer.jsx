import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import payment from "../../assets/payment.png";
import vk from "../../assets/vk.png";
import { useLocation, NavLink } from "react-router-dom";
function Footer() {
  let { pathname } = useLocation();
  if (
    pathname === "/admin" ||
    pathname === "/admin/createproduct" ||
    pathname === "/admin/manageproduct" ||
    pathname === "/notfound"
  ) {
    return <></>;
  }
  return (
    <footer>
      <div className="container">
        <div className="e">
          <div className="e1">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
            <h1>8 (800) 890-46-56</h1>
            <img style={{ marginTop: "35px" }} src={payment} alt="" />
            <p>Политика конфидециальности</p>
            <p>Пользовательское соглашение</p>
            <img
              style={{ marginRight: "12px", marginTop: "35px" }}
              src={vk}
              alt=""
            />
            <img
              style={{ marginRight: "12px", marginTop: "35px" }}
              src={vk}
              alt=""
            />
            <img
              style={{ marginRight: "12px", marginTop: "35px" }}
              src={vk}
              alt=""
            />
          </div>
          <div className="e2">
            <h1>Покупателям</h1>
            <NavLink to={"/about"}>О компании</NavLink>
            <NavLink to={"/order"}>Доставка и оплата</NavLink>
            <NavLink to={"/return"}>Возврат</NavLink>
            <NavLink to={"/garant"}>Гарантии</NavLink>
            <NavLink to={"/contact"}>Контакты</NavLink>
            <NavLink to={"/blog"}>Блог</NavLink>
          </div>
          <div className="e2">
            <h1>Товары</h1>
            <p>Люстры</p>
            <p>Светильники</p>
            <p>Бра</p>
            <p>Торшеры</p>
            <p>Комплектуюшие</p>
            <p>Настольные лампы</p>
          </div>
          <div className="e2">
            <h1>Каталог</h1>
            <p>Споты</p>
            <p>Трековые светильники</p>
            <p>Уличные светильники</p>
            <p>Технические светильники</p>
            <p>Светодиодные ленты</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
