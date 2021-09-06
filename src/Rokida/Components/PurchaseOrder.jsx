import React from "react";
import "../css/Layout.less";
import "../css/Responesive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarauseoProduct from "./CarauseoProduct";
import PurchaseShow from "./PurchaseShow";

const PurchaseOrder = () => {
  return (
    <>
      <PurchaseShow />
      <CarauseoProduct />
    </>
  );
};
export default PurchaseOrder;
