import React, { useEffect, useState } from 'react';
import { data, PaginationData } from '../DataFake/Product1';
import ProductCard from './common/ProductCard';
import Slick from './Slick';

const settings = {
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 2,
        slidesToShow: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesPerRow: 2,
        slidesToShow: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 2,
        slidesToShow: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesPerRow: 2,
        slidesToShow: 1,
      },
    },
  ],
};
const ProductItem = () => {
  const [Product1, setProduct] = useState([]);
  useEffect(() => {
    const loadItem = async () => {
      const sale = data;
      const limit = PaginationData(data).length;
      console.log(limit);
      await setProduct(sale);
    };
    loadItem();
  }, []);
  return (
    <>
      <Slick settings={settings}>
        {Product1.map((item, index) => (
          <ProductCard key={'product-slide-' + index} item={item} />
        ))}
      </Slick>
    </>
  );
};
export default React.memo(ProductItem);
