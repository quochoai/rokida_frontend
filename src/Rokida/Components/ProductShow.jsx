import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import productApi from "Rokida/api/productApi";
import { ListMenu } from "../DataFake/ListProduct";
import backfriday from "../images/black-friday.png";
import christmassale from "../images/christmas-sale.png";
import christmas from "../images/christmas.png";
import ProductCardList from "./common/ProductCardList";

const ProductShow = () => {
  const [productList, setProductList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const loadItem = async () => {
      const params = queryString.parse(location.search);
      const { data } = await productApi.getAll();

      const sale = params.q ? data.filter((item) => item.name.toLowerCase().includes(params.q.toLowerCase())) : data
      console.log(sale);
      // const limit = PaginationData(data).length
      // console.log(limit)
      setProductList(sale);
    };
    loadItem();
  }, [location]);
  return (
    <>
      <Container className="mt-5">
        <Row className="">
          <Col className=" text-center text-lg-left">
            <Navbar navbar="light" expand="lg">
              <Navbar.Toggle
                aria-controls="rokida__product"
                className="ml-auto mr-auto"
              />
              <Navbar.Collapse className="" id="rokida__product">
                <Nav className="nav__right">
                  <ListGroup className="">
                    <h6>Tất cả danh mục</h6>
                    {ListMenu.map((item, index) => (
                      <div className="" key={index}>
                        <Nav.Link href={item.href}>{item.name}</Nav.Link>
                      </div>
                    ))}
                  </ListGroup>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="text-center">
              <img src={christmassale} alt="" />
              <img src={christmas} alt="" />
            </div>
          </Col>
          <Col md={12} lg={9} sm={12}>
            <ProductCardList products={productList} />
          </Col>
        </Row>
      </Container>
      <nav className="my-2">
        <img src={backfriday} alt="" />
      </nav>
    </>
  );
};

export default React.memo(ProductShow);
