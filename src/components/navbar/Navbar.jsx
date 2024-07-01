import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import like from "../../assets/like.png";
import cart from "../../assets/cart.png";
import compare from "../../assets/compare.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Call from "../call/Call";
import { useGetProductsQuery } from "../../context/productApi";
import { useSelector } from "react-redux";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  let wishList = useSelector((state) => state.heart.value);
  let cartList = useSelector((state) => state.cart.value);
  const { data } = useGetProductsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [call, setCall] = useState(false);
  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((product) =>
          product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
      );
    }
  }, [searchValue]);

  let { pathname } = useLocation();
  if (
    pathname === "/admin" ||
    pathname === "/admin/createproduct" ||
    pathname === "/admin/manageproduct" ||
    pathname === "/admin/managecategory" ||
    pathname === "/admin/createcategory"
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
            <button onClick={() => setCall(true)}>Заказать звонок</button>
          </div>
        </div>
        <nav>
          <div className="responsivemenu">
            <button
              onClick={() => setToggle(!toggle)}
              className="menu-btn"
              id="menu-btn"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <NavLink to={"/"}>
              <img className="responsivelogo" src={logo} alt="" />
            </NavLink>
          </div>
          <div className={`navbar-responsive ${toggle ? "open" : ""}`}>
            <div className="a3">
              <div id="responsive">
                <NavLink to={"/about"}>О компании</NavLink>
                <NavLink to={"/order"}>Доставка и оплата</NavLink>
                <NavLink to={"/return"}>Возврат</NavLink>
                <NavLink to={"/garant"}>Гарантии</NavLink>
                <NavLink to={"/contact"}>Контакты</NavLink>
                <NavLink to={"/blog"}>Блог</NavLink>
                <p>8 (800) 890-46-56</p>
                <button onClick={() => setCall(true)}>Заказать звонок</button>
              </div>
              <NavLink to={"/catalog"}>
                <img src={menu} alt="" />
                <p>Каталог</p>
              </NavLink>
              <div className="a4">
                <input
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Поиск по товарам"
                />
                <img src={search} alt="" />
                <div className="search">
                  {searchValue.trim()
                    ? filteredData?.slice(0, 5).map((el) => (
                        <div className="searchitems" key={el.id}>
                          <h3>{el.title}</h3>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="responsivelinks">
            <NavLink to={"/wishes"} className="a5">
              <img src={like} alt="" />
              <span>{wishList.length}</span>
              <p>Избранное</p>
            </NavLink>
            <NavLink id="forresponsive" to={"/notfound"} className="a5">
              <img src={compare} alt="" />
              <p>Сравнение</p>
            </NavLink>
            <NavLink to={"/cart"} className="a5">
              <img src={cart} alt="" />
              <span>{cartList.length}</span>
              <p>Корзина</p>
            </NavLink>
          </div>
        </nav>
        <div id="responsivesearch">
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Поиск по товарам"
          />
          <img src={search} alt="" />
          <div className="search">
            {searchValue.trim()
              ? filteredData?.slice(0, 5).map((el) => (
                  <div className="searchitems" key={el.id}>
                    <h3>{el.title}</h3>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      {call ? <Call setCall={setCall} /> : <></>}
    </header>
  );
}

export default Navbar;
