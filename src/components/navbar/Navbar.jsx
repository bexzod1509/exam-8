import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import like from "../../assets/like.png";
import cart from "../../assets/cart.png";
import compare from "../../assets/compare.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  let { pathname } = useLocation();
  if (
    pathname === "/admin" ||
    pathname === "/admin/createproduct" ||
    pathname === "/admin/manageproduct"
  ) {
    return <></>;
  }
  return (
    <header>
      <div className="container">
        <div className="a">
          <div className="a1">
            <NavLink to={"/about"}>О компании</NavLink>
            <NavLink to={"/order"}>Доставка и оплата</NavLink>
            <NavLink to={"/return"}>Возврат</NavLink>
            <NavLink to={"/garant"}>Гарантии</NavLink>
            <NavLink to={"/contact"}>Контакты</NavLink>
            <NavLink to={"/blog"}>Блог</NavLink>
          </div>
          <div className="a2">
            <p>8 (800) 890-46-56</p>
            <button>Заказать звонок</button>
          </div>
        </div>
        <nav>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
          <div className="a3">
            <NavLink to={"/catalog"}>
              <img src={menu} alt="" />
              <p>Каталог</p>
            </NavLink>
            <div className="a4">
              <input type="search" placeholder="Поиск по товарам" />
              <img src={search} alt="" />
            </div>
          </div>
          <NavLink to={"/wishes"} className="a5">
            <img src={like} alt="" />
            <span>0</span>
            <p>Избранное</p>
          </NavLink>
          <NavLink to={"/notfound"} className="a5">
            <img src={compare} alt="" />
            <p>Сравнение</p>
          </NavLink>
          <NavLink to={"/cart"} className="a5">
            <img src={cart} alt="" />
            <span>0</span>
            <p>Корзина</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
