import React from "react";
import "./Cart.scss";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import ProductCart from "../../components/productCart/ProductCart";
function Cart() {
  let cartList = useSelector((state) => state.cart.value);
  return (
    <div>
      <div className="container">
        <div className="route">
          <p>
            Главная <b>/ Корзина</b>
          </p>
        </div>
        <div className="cart">
          <h1>Корзина</h1>
          <span>{cartList.length}</span>
        </div>
      </div>
      {cartList.length ? <ProductCart data={cartList} /> : <Empty />}
    </div>
  );
}

export default Cart;
