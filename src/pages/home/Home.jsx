import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Catalog from "../../components/catalogComponent/CatalogComponent";
import Question from "../../components/question/Question";
import { useGetProductsQuery } from "../../context/productApi";
import { useGetCategoryQuery } from "../../context/categoryApi";
import Product from "../../components/product/Product";
import Brand from "../../components/brand/Brand";
import BlogComponent from "../../components/blogcomponent/BlogComponent";
function Home() {
  const { data, isLoading } = useGetProductsQuery();
  const { data: category } = useGetCategoryQuery();
  const [categoryValue, setCategoryValue] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    setFilteredData(
      data?.filter(
        (i) =>
          i.category.toLocaleLowerCase() === categoryValue.toLocaleLowerCase()
      )
    );
  }, [categoryValue]);
  return (
    <div>
      <Hero />
      <Catalog />
      <Question />
      <div className="container">
        <div className="category">
          <data value="" onClick={(e) => setCategoryValue(e.target.value)}>
            All
          </data>
          {category?.map((el) => (
            <data
              key={el.id}
              value={el.Category}
              onClick={(e) => setCategoryValue(e.target.value)}
            >
              {el.Category}
            </data>
          ))}
        </div>
      </div>
      <Product
        data={categoryValue === "" ? data : filteredData}
        isLoading={isLoading}
      />
      <Brand />
      <BlogComponent />
    </div>
  );
}

export default Home;
