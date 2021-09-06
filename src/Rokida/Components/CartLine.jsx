import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IncreaseNumberInput from "../Components/IncreaseNumberInput";
import {
  default as icon_ship2
} from "../images/icon-ship2.png";
import img_account from "../images/logo/account.png";
import product_cart from "../images/product-cart.png";

CartLine.propTypes = {
  
};

function CartLine(props) {
  const { cartItem, onChange, hidden } = props;
  return (
    <>
      <Row className="hr-order1">
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
      <Row className="hr-order1">
        <Col lg={2} className="detail-header-left text-left">
          <input style={hidden?{display: "none"}:{marginRight: "10px"}} type="checkbox" value={cartItem.id} checked={cartItem.selected}
            onChange={(event) => {onChange(event, cartItem)}}/>
          <img src={product_cart} alt="" />
          <img
            src={icon_ship2}
            alt=""
            className="d-block sale position-absolute"
            style={{ bottom: "35px", left: "15px" }}
          />
        </Col>
        <Col lg={5} md={5}>
          <ul>
            <li>{cartItem.product_name} - Giảm giá 30%</li>
            <li className="list-cart">
              <p>Size 1m8 x 2 | Số lượng</p> <IncreaseNumberInput orderQty={cartItem.quantity} />
            </li>
          </ul>
        </Col>
        <Col lg={5} className="detail-header-right text-right">
          <ul className="link-order-red">
            <li>
              <button className="button-order1">Xoá</button> Tìm sản phẩm
              tương tự
            </li>
            <li className="txt-red">{cartItem.price}</li>
            <li>Phí vận chuyển</li>
            <li>
              Giao hàng tiết kiệm | <Link to="/">Thay đổi</Link>
            </li>
            <li className="txt-red">0đ</li>
            <li className="txt-cart1">{cartItem.total_price}</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default CartLine;