import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const IncreaseNumberInput = (props) => {
  const { orderQty, onIncreaseNumberInputClick } = props;

  return (
    <Container className="increase-number">
      <Row>
        <Col md={4}>
          <input
            type="button"
            onClick={() => {
              if (onIncreaseNumberInputClick) onIncreaseNumberInputClick(-1);
            }}
            value="-"
          />
        </Col>
        <Col md={4}>
          <input
            type="text"
            value={orderQty}
            onChange={(e) => {
              if (onIncreaseNumberInputClick) onIncreaseNumberInputClick(e.target.value, true);
            }}
          />
        </Col>
        <Col md={4}>
          <input
            type="button"
            onClick={() => {
              if (onIncreaseNumberInputClick) onIncreaseNumberInputClick(1);
            }}
            value="+"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(IncreaseNumberInput);
