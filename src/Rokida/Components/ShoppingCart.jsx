import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  Nav,
  Row,
} from "react-bootstrap";
import { ListCart } from "../DataFake/ListProduct";
import user from "../images/user.png";
import CartItem from "./CartItem";
import { useSelector } from 'react-redux';

const ShoppingCart = (props) => {
  const { orders } = props;
  const userLogedin = useSelector(state => state.user.current);
  // const isLogin = !!userLogedin.id;
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={2}>
            <p>
              <img src={user} alt="avatar" />
              {userLogedin.first_name}
            </p>
            <hr></hr>
            <Nav className="nav__right ml-auto mr-auto">
              <ListGroup className="">
                {ListCart.map((item, index) => (
                  <div className="txt_list" key={index}>
                    <Nav.Link to={item.href}>{item.name}</Nav.Link>
                  </div>
                ))}
              </ListGroup>
            </Nav>
          </Col>
          <Col lg={9}>
            <h6>Rokida &gt; Kiểm tra đơn hàng &gt; Tất cả</h6>
            <Container className="header__help justify-content-center text-center">
              <Nav className="mr-auto ml-auto list-cart border-list-cart">
                <Nav.Item className=" ">
                  <Nav.Link to="/#">Tất cả</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link to="/#">Chờ xác nhận</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link to="/#">Chờ lấy hàng</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link to="/#">Đang giao</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link to="/#">Đã giao</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link to="/#">Đã huỷ</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <Row className="w-60 align-content-center">
              <Col md={10} className=" ml-md-5 px-0">
                <InputGroup className="py-2 ">
                  <FormControl
                    type="text"
                    className="form-control "
                    placeholder="Tìm kiếm theo shop, mã đơn hàng, ID"
                    aria-label=""
                    aria-describedby="search_product"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="search_product">
                      <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            {orders.map((item, index) => (
              <CartItem key={"cartItem" + index} cart={item} />
            ))}
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
};

export default React.memo(ShoppingCart);
