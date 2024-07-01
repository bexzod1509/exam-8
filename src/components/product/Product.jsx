import React from "react";
import "./Product.scss";
import ProductImg from "../../assets/product.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/heartSlice";
import { addToCart } from "../../context/cartSlice";
function Product({ data, isLoading }) {
  let { pathname } = useLocation();
  let wishList = useSelector((state) => state.heart.value);
  let cartList = useSelector((state) => state.cart.value);
  let dispatch = useDispatch();
  let Products = data
    ?.slice(0, pathname === "/all" || pathname === "/wishes" ? data?.length : 8)
    .map((product) => (
      <div key={product.id} className="d1">
        <NavLink to={`/product/${product.id}`}>
          <img width={290} height={290} src={product.image} alt="" />
        </NavLink>
        {wishList?.some((item) => item.id === product.id) ? (
          <FaHeart
            className="d3"
            onClick={() => dispatch(toggleHeart(product))}
            style={{ color: "red" }}
          />
        ) : (
          <FaRegHeart
            className="d3"
            onClick={() => dispatch(toggleHeart(product))}
          />
        )}
        <h1>{product.title}</h1>
        <div className="d2">
          <div>
            <del>{Math.round(+product.price + 10)}$</del>
            <p>{product.price}$</p>
          </div>
          {cartList?.some((item) => item.id === product.id) ? (
            <BsCartCheckFill onClick={() => dispatch(addToCart(product))} />
          ) : (
            <BsCart onClick={() => dispatch(addToCart(product))} />
          )}
        </div>
      </div>
    ));
  return (
    <div className="container">
      <div className="d">
        <div className={isLoading ? "loading" : "hide"}>
          {data
            ?.slice(
              0,
              pathname === "/all" || pathname === "/wishes" ? data?.length : 8
            )
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
