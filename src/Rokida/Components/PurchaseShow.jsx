import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap'
import { ListCart } from '../DataFake/ListProduct';
import { Link } from 'react-router-dom';
import userImage from '../images/user.png';
import product_cart from '../images/product-cart.png'
import icon_ship2 from '../images/icon-ship2.png'
import { useSelector } from 'react-redux';

const PurchaseShow = () => {
    const [user, setUser] = useState({});

    const userLogedin = useSelector(state => state.user.current);
    const isLogin = !!userLogedin.id;

    useEffect(() => {
        try {
            const getUser = async () => {
                const loginUser = localStorage.getItem('user');
                if (loginUser) setUser(JSON.parse(loginUser));
                console.log(loginUser);
            };

            getUser();
        } catch (error) {
            console.log('Fail to get user', error);
        }
    }, []);
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={2}>
                    {isLogin && <> 
                <Nav.Item>
                  <Nav.Link href="/User" className="img-fluid float-sm-left">
                    <img src={userImage}  id="img__user" alt="" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="text-center">
                  <Nav.Link href="/User" >Xin chào {userLogedin.first_name}</Nav.Link>
                </Nav.Item>
              </> }
                        <hr></hr>
                        <Nav className="nav__right ml-auto mr-auto">
                            <ListGroup className="">
                                {ListCart.map((item, index) => (
                                    <div className="txt_list" key={index}><Nav.Link to={item.href}>{item.name}</Nav.Link></div>
                                ))}
                            </ListGroup>
                        </Nav>
                    </Col>
                    <Col lg={9}>
                        <Container className="header__help justify-content-center text-center">
                            <Nav className="mr-3 ml-3 list-cart border-list-cart">
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
                        <Col>
                            <Row>
                                <Col lg={2} className="detail-header-left text-left">
                                    <img src={product_cart} alt="" />
                                </Col>
                                <Col lg={6}>
                                    <ul>
                                        <li><img src={icon_ship2} alt="" /></li>
                                        <li>Bộ chăn lông cừu Anh - Giảm giá 30%</li>
                                        <li className="list-cart">x 1 bộ | <Link to="/">Mua lại</Link> | <Link to="/">Xem chi tiết đơn hàng</Link></li>
                                    </ul>
                                </Col>
                                <Col lg={4} className="detail-header-right text-right">
                                    <ul>
                                        <li className="txt-cart2">Thành tiền</li>
                                        <li className="txt-cart1">1.200.000</li>
                                    </ul>
                                </Col>
                            </Row>
                            <div className="detail-header-right text-right">
                                <button className="button-purchase">Chờ xác nhận</button>
                                <button className="button-cart2">Xem chi tiết</button>
                                <button className="button-cart2">Huỷ đơn</button>
                            </div>
                        </Col>
                        <Col className="product-cart">
                            <Row>
                                <Col lg={2} className="detail-header-left text-left">
                                    <img src={product_cart} alt="" />
                                </Col>
                                <Col lg={6}>
                                    <ul>
                                        <li><img src={icon_ship2} alt="" /></li>
                                        <li>Bộ chăn lông cừu Anh - Giảm giá 30%</li>
                                        <li className="list-cart">x 1 bộ | <Link to="/">Mua lại</Link> | <Link to="/">Xem chi tiết đơn hàng</Link></li>
                                    </ul>
                                </Col>
                                <Col lg={4} className="detail-header-right text-right">
                                    <ul>
                                        <li className="txt-cart2">Thành tiền</li>
                                        <li className="txt-cart1">1.200.000</li>
                                    </ul>
                                </Col>
                            </Row>
                            <div className="detail-header-right text-right">
                                <button className="button-purchase">Mua lần nữa</button>
                                <button className="button-cart2">Xem shop</button>
                                <button className="button-cart2">Đánh giá</button>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default React.memo(PurchaseShow)