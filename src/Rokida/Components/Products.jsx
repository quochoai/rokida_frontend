import React from "react";
import "../css/Layout.less";
import "../css/Responesive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from "./ProductDetails";
import CarauseoProduct from "./CarauseoProduct";

const Products = () => {
  return (
    <>
      <ProductDetails />
      <CarauseoProduct />
    </>
  );
};
export default Products;
