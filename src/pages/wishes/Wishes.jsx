import React from "react";
import "./Wishes.scss";
import Product from "../../components/product/Product";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
function Wishes() {
  let wishlist = useSelector((state) => state.heart.value);
  return (
    <div>
      <div className="container">
        <div className="wishes">
          <h1>Избранные товары</h1>
          <span>{wishlist.length}</span>
        </div>
      </div>
      {wishlist.length ? <Product data={wishlist} /> : <Empty />}
    </div>
  );
}

export default Wishes;
