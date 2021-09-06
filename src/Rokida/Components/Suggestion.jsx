import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import productApi from '../api/productApi';
import poster_Rokida from '../images/poster-rokida-onl.png';
import ProductCardList from './common/ProductCardList';

const Suggestion = () => {
  const [Product1, setProduct] = useState([]);
  useEffect(() => {
    const loadItem = async () => {
      const { data } = await productApi.getAll();
      await setProduct(data);
    };
    loadItem();
  }, []);
  return (
    <>
      <Container className="mt-5">
        <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Gợi ý hôm nay</h3>
        <Row className="my-3">
          <Col md={12} lg={9} sm={12}>
            <ProductCardList products={Product1} />
          </Col>
          <Col className=" text-center text-lg-right">
            <img src={poster_Rokida} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(Suggestion);
