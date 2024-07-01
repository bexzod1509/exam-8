import React, { useEffect, useState } from "react";
import ProductImg from "../../assets/product.png";
import { NavLink } from "react-router-dom";
import deleteadmin from "../../assets/deleteadmin.png";
import editadmin from "../../assets/editadmin.png";
import { useDeleteProductMutation } from "../../context/productApi";
import { toast } from "react-toastify";
import EditProduct from "../editProduct/EditProduct";
function Product({ data, isLoading }) {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted");
    }
  }, [isSuccess]);
  let Products = data?.map((product) => (
    <div key={product.id} className="d1">
      <NavLink to={`/product/${product.id}`}>
        <img width={290} height={290} src={product.image} alt="" />
      </NavLink>
      <h1>{product.title}</h1>
      <div className="d2">
        <div>
          <del>{Math.round(+product.price + 10)}$</del>
          <p>{product.price}$</p>
        </div>
        <div>
          <img
            onClick={() => setEditProduct(product)}
            style={{ marginRight: "10px", cursor: "pointer" }}
            src={editadmin}
            alt=""
          />
          <img
            onClick={() => deleteProduct(product.id)}
            style={{ cursor: "pointer" }}
            src={deleteadmin}
            alt=""
          />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="d">
          <div className={isLoading ? "loading" : "hide"}>
            {data?.map((load) => (
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
      {editProduct ? (
        <EditProduct
          editProduct={editProduct}
          setEditProduct={setEditProduct}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Product;
