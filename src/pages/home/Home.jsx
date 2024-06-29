import React from "react";
import Hero from "../../components/hero/Hero";
import Catalog from "../../components/catalog/Catalog";
import Question from "../../components/question/Question";
import { useGetProductsQuery } from "../../context/productApi";
import Product from "../../components/product/Product";
import Brand from "../../components/brand/Brand";
import BlogComponent from "../../components/blogcomponent/BlogComponent";
function Home() {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <div>
      <Hero />
      <Catalog />
      <Question />
      <Product data={data} isLoading={isLoading} />
      <Brand />
      <BlogComponent />
    </div>
  );
}

export default Home;
