import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import queryString from "query-string";
import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import "../css/Layout.less";
import "../css/Responesive.css";
import iconUS from "../images/iconUS.png";
import iconVn from "../images/iconVN.png";
import cart from "../images/logo/cart.png";
import { logout } from "Rokida/slices/userSlice";
import { useSelector } from 'react-redux';

const HeaderNew = (props) => {

  const dispatch = useDispatch();
  const userLogedin = useSelector(state => state.user.current);
  const isLogin = !!userLogedin.id;

  const location = useLocation();
  const params = queryString.parse(location.search);

  const history = useHistory();

  const [numberShop] = useState(0);
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      const queryParams = { q: search };
      history.push({
        pathname: "/items",
        search: queryString.stringify(queryParams),
      });
    } else {
      history.push("/");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar navbar="" expand="lg">
        <Navbar.Toggle
          aria-controls="navbar__rokida"
          className="ml-auto mr-auto bg_header"
        />
        <Navbar.Collapse id="navbar__rokida">
          <Container className="header__help justify-content-center text-center">
            <Nav className="mr-auto ml-auto">
              <Nav.Item className=" ">
                <Nav.Link href="112.78.1.188:8087">BÁN HÀNG CÙNG ROKIDA</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/Support">TRỢ GIÚP</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/Cart">KIỂM TRA ĐƠN HÀNG</Nav.Link>
              </Nav.Item>
              {!isLogin && <>
                <Nav.Item className=" ">
                  <Nav.Link href="/Login">ĐĂNG NHẬP</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link href="/Registration">ĐĂNG KÝ</Nav.Link>
                </Nav.Item>
              </>}
              {isLogin && <>
                <Nav.Item className=" ">
                  <Nav.Link href="#" onClick={handleLogout}>ĐĂNG XUẤT</Nav.Link>
                </Nav.Item>
              </>}
              <Nav.Item className="text-center ">
                <Nav.Link>
                  <div className="flag">
                    <img className="img-fluid" src={iconVn} alt="" />{" "}
                    <img className="img-fluid" src={iconUS} alt="" />{" "}
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          <Container className="header__form justify-content-center text-center">
            <Row className="w-80 align-content-center ml-auto mr-auto">
              <Col md={10} className=" ml-md-5 px-0">
                <Form onSubmit={onSearchSubmit}>
                  <InputGroup className="py-2">
                    <FormControl
                      name="search"
                      defaultValue={params.q || ""}
                      type="text"
                      className="form-control"
                      placeholder=""
                      aria-label=""
                      aria-describedby="search_product"
                      onChange={onSearchChange}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="search_product">
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Col>
              <Col className="px-0 text-center py-2">
                <Nav.Link href="/Cart" className="nav-link position-relative ">
                  <b className="position-absolute number d-block">
                    {numberShop}
                  </b>
                  <img src={cart} alt="" />
                </Nav.Link>
              </Col>
            </Row>
          </Container>
          <Container className="header__product justify-content-center text-center">
            <Nav className="mr-auto ml-auto">
              <Nav.Item className=" ">
                <Nav.Link href="/#">Nấu ăn</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/#">Thiết bị nhà tắm</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/#">Thời trang nam</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/#">Túi xách</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/#">Váy đầm</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default React.memo(HeaderNew);
