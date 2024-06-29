import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/productApi";
function Allproducts() {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <div>
      <div className="allproducts container">
        <h1>Популярные товары</h1>
      </div>
      <Product data={data} isLoading={isLoading} />
    </div>
  );
}

export default Allproducts;
