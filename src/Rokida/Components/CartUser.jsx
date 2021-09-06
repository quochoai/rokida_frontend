import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../css/Layout.less";
import "../css/Responesive.css";
import CarauseoProduct from "./CarauseoProduct";
import ShoppingCart from "./ShoppingCart";
import { getCartList } from "Rokida/slices/cartSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const CartUser = () => {
  const [cartList, setCartList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getItem = async () => {
      try {
        const action = getCartList();
        const actionResult = await dispatch(action);
        const cartList = unwrapResult(actionResult);
        if (cartList) setCartList([...cartList]);
        console.log(cartList);
      } catch (error) {
        console.log("Get Cart List fail:", error.message);
      }
    }

    getItem();
  }, [dispatch]);

  return (
    <>
      <ShoppingCart orders={cartList} />
      <CarauseoProduct />
    </>
  );
};
export default CartUser;
