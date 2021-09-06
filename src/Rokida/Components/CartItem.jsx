import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon_ship2 from "../images/icon-ship2.png";
import img_account from "../images/logo/account.png";
import product_cart from "../images/product-cart.png";

CartItem.propTypes = {};

function CartItem(props) {
  const { cart } = props;

  return (
    <div>
      <Row className="mt-4">
        <Col className="detail-header-left" md={6}>
          <p className="account-cart">
            {" "}
            <img
              src={img_account}
              className="img-fluid rounded-circle"
              id="img__avatar"
              alt=""
            />
            <Link to="/">Moon shop</Link> | <Link to="/">Xem shop</Link>
          </p>
        </Col>
        <Col className="detail-header-right text-right" md={6}>
          <p className="account-cart mt-1">
            <Link to="/">Xem chi tiết đơn hàng</Link> |{" "}
            <Link to="/">Đơn hàng đã giao thành công</Link>
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <Row>
            <Col lg={2} className="detail-header-left text-left">
              <img src={product_cart} alt="" />
            </Col>
            <Col lg={6}>
              <ul>
                <li>
                  <img src={icon_ship2} alt="" />
                </li>
                <li>{cart.product_name} - Giảm giá 30%</li>
                <li className="list-cart">
                  x {cart.quantity} bộ | <Link to="/">Mua lại</Link> |{" "}
                  <Link to="/">Xem chi tiết đơn hàng</Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} className="detail-header-right text-right">
              <ul>
                <li>
                  <button className="button-cart1">Đã giao hàng</button>
                </li>
                <li className="txt-cart2">{cart.price}</li>
                <li className="txt-cart1">Tổng tiền: {cart.total_price}</li>
              </ul>
            </Col>
          </Row>
          <div className="detail-header-right text-right">
            <button className="button-cart2">Xác nhận hàng</button>
            <button className="button-cart2">Đánh giá</button>
            <button className="button-cart2">Mua lần nữa</button>
          </div>
        </Col>
      </Row>
      {/* 
      <Row className="mt-4">
        <Col className="detail-header-left" md={6}>
          <p className="account-cart">
            {" "}
            <img
              src={img_account}
              className="img-fluid rounded-circle"
              id="img__avatar"
              alt=""
            />
            <Link to="/">Moon shop</Link> | <Link to="/">Xem shop</Link>
          </p>
        </Col>
        <Col className="detail-header-right text-right" md={6}>
          <p className="account-cart mt-1">
            <Link to="/">Xem chi tiết đơn hàng</Link> |{" "}
            <Link to="/">Đơn hàng đã giao thành công</Link>
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Col className="product-cart">
        <Row>
          <Col lg={2} className="detail-header-left text-left">
            <img src={product_cart} alt="" />
          </Col>
          <Col lg={6}>
            <ul>
              <li>
                <img src={icon_ship2} alt="" />
              </li>
              <li>Bộ chăn lông cừu Anh - Giảm giá 30%</li>
              <li className="list-cart">
                x 1 bộ | <Link to="/">Mua lại</Link> |{" "}
                <Link to="/">Xem chi tiết đơn hàng</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} className="detail-header-right text-right">
            <ul>
              <li>
                <button className="button-cart3">Đã nhận hàng</button>
              </li>
              <li className="txt-cart2">1.200.000</li>
              <li className="txt-cart1">Tổng tiền: 1.200.000</li>
            </ul>
          </Col>
        </Row>
        <div className="detail-header-right text-right">
          <button className="button-cart2">Mua lần nữa</button>
        </div>
      </Col>*/}
    </div>
  );
}

export default CartItem;
