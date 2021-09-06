import React from "react";
import Question from "./_Question";
import AboutContent from "./AboutContent";
import CarauseoProduct from "./CarauseoProduct";
import "../css/Layout.less";
import "../css/Responesive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Help = () => {
  return (
    <>
      <AboutContent />
      <Question />
      <CarauseoProduct />
    </>
  );
};
export default Help;
