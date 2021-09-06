import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_Partner3 from "../images/logo/logo-bestexpress.png";

const SuperSale = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="my-3">
          <Col className="text-center">
            <img src={img_Partner3} alt="" />
          </Col>
          <Col className="text-center">
            <img src={img_Partner3} alt="" />
          </Col>
          <Col className="text-center">
            <img src={img_Partner3} alt="" />
          </Col>
          <Col className="text-center">
            <img src={img_Partner3} alt="" />
          </Col>
        </Row>
        <p style={{ top: "40px", textAlign: "center" }}>
          <b>ĐỐI TÁC CỦA CHÚNG TÔI</b>
        </p>
      </Container>
    </>
  );
};

export default React.memo(SuperSale);
