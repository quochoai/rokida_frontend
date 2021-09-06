import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

ProductCardList.propTypes = {
  products: PropTypes.array.isRequired,
};

function ProductCardList(props) {
  const { products } = props;
  return (
    <Row>
      {products.map((item, index) => (
        <Col md={4} lg={4} sm={4} key={`super-sales-${index}`}>
          <ProductCard item={item} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductCardList;
