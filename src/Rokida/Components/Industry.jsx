import React from 'react';
import Banner from './Banner';
import BannerSubIndus from './BannerSub-Indus';
import FashionWoman from './FashionWoman';
import CarauseoProduct from './CarauseoProduct';
import '../css/Layout.less';
import '../css/Responesive.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductShow from './ProductShow';
import ProductList from './ProductList';

const Industry = () => {
  return (
    <>
      <Banner />
      <BannerSubIndus />
      <ProductList />
      <FashionWoman />
      <CarauseoProduct />
      <ProductShow />
    </>
  );
};

export default Industry;
