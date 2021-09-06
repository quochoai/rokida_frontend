import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../css/Layout.less";
import "../css/Responesive.css";
import CarauseoProduct from "./CarauseoProduct";
import OrderDetail from "./OrderDetail";

const OrderUser = () => {
  
  return (
    <>
      <OrderDetail/>
      <CarauseoProduct />
    </>
  );
};
export default OrderUser;
