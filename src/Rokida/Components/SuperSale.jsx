import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import productApi from "../api/productApi";
import banner_SuperSale1 from "../images/banner-sieusale-1.png";
// import { data, PaginationData } from '../DataFake/Product1';
import ProductCardList from "./common/ProductCardList";

const SuperSale = (props) => {
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    const loadItem = async () => {
      const { data } = await productApi.getAll();

      await setProductList(data);
    };
    loadItem();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <h3 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
          Siêu Sale
        </h3>
        <Row className="">
          <Col className=" text-center text-lg-left">
            <img src={banner_SuperSale1} alt="" className="img-fluid" />
          </Col>
          <Col md={12} lg={9} sm={12}>
            <ProductCardList products={ProductList} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(SuperSale);
