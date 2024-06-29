import React from "react";
import "./Product.scss";
import ProductImg from "../../assets/product.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
function Product({ data, isLoading }) {
  let { pathname } = useLocation();
  let Products = data
    ?.slice(0, pathname === "/all" ? data?.length : 8)
    .map((product) => (
      <div key={product.id} className="d1">
        <NavLink to={`/product/${product.id}`}>
          <img width={290} height={290} src={ProductImg} alt="" />
        </NavLink>
        <FaRegHeart className="d3" />
        <h1>{product.title}</h1>
        <div className="d2">
          <div>
            <del>{Math.round(product.price + 10)}$</del>
            <p>{product.price}$</p>
          </div>
          <BsCart />
        </div>
      </div>
    ));
  return (
    <div className="container">
      <div className="d">
        <div className={isLoading ? "loading" : "hide"}>
          {data
            ?.slice(0, pathname === "/all" ? data?.length : 8)
            .map((load) => (
              <div key={load.id}>
                <div className="sk1"></div>
                <div className="sk2"></div>
                <div className="sk3"></div>
                <div className="sk3"></div>
              </div>
            ))}
        </div>
        {Products}
      </div>
    </div>
  );
}

export default Product;
