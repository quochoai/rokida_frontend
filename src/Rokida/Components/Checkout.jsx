import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { confirmCart, confirmOrder, getCartList } from "Rokida/slices/cartSlice";
import CartLine from "./CartLine";

const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userRedux = useSelector(state => state.user);

  const unknown = ["Rokida", "Thanh toán"];
  const [address, setAddress] = useState("Nguyễn Thuý: Landmark 5, Vinhomes Central Park, Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Hồ Chí Minh");
  const [cartList, setCartList] = useState(() => {
    const confirmItem = JSON.parse(localStorage.getItem("confirmItem"));
    return !!confirmItem ? confirmItem : [];
  });

  useEffect(() => {
    const getItem = async () => {
      try {
        const action = confirmCart();
        const actionResult = await dispatch(action);
        const responseCartList = unwrapResult(actionResult);
        const newTotal = responseCartList["1"].slice(responseCartList["1"].length - 1, responseCartList["1"].length);

        console.log(newTotal);
      } catch (error) {
        console.log("Get Cart List fail:", error.message);
      }
    }

    getItem();
  }, [dispatch]);
  
  const handleCartStatusUpdate = (event) => {
    event.preventDefault();

    (async () => {
      try {
        const totalBill = cartList.reduce((accu, curr) => {
          return accu + curr.total_price;
        }, 0);

        const action = confirmOrder({
          total_bill: totalBill,
          type_ship_id: 1,
          ship_address: address,
          phone: userRedux.current.phone,
          email: userRedux.current.email
        });
        const result = await dispatch(action);
        const unwrapCartUpdateResult = unwrapResult(result);

        await dispatch(getCartList());
        alert(unwrapCartUpdateResult.message);
        history.push("/");
      } catch (error) {
        console.log("Fail to call action updateCartStatus:", error.message);
      }
    })()
  }

  return (
    <>
      <Container className="mt-2">
        <Row>
          <ul className="breadcrumb-rokida">
            {unknown.map((item, index) => (
              <li key={"unknown-" + index}>
                <Link to="/">{item}</Link>
              </li>
            ))}
          </ul>
        </Row>
        <Row className="hr-order">
          <div className="text-left px-0 col-6">
            <p className="txt-red">ĐỊA CHỈ NHẬN HÀNG</p>
          </div>
          <div className="text-right px-0 col-6  txt-order">
            <Link to="/">Thêm địa chỉ mới</Link> |{" "}
            <Link to="/">Thiết lập địa chỉ</Link>
          </div>
        </Row>
        <Row className="hr-order">
          <div className="col-12 px-0">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={address}
              />
            </Form.Group>
          </div>
          <p className="txt-red">SẢN PHẨM</p>
        </Row>
        <Row>
          {/* <Col lg={3}>
            <Row>
              <p style={{ margin: "0 0.5rem 1rem" }}>Sản phẩm tương tự</p>
               {ListOrder.map((item, index) => (
                <div key={"ListOrder" + index}>
                  <div key={index} className="position-relative sale__item">
                    <Card className="card__item position-static">
                      {item.is_sale && (
                        <div
                          className="d-block sale position-absolute p-2"
                          style={{
                            zIndex: "10000",
                            top: "30px",
                            right: "20px",
                            backgroundImage: `url(${img_sale})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          <b
                            className="d-block"
                            style={{
                              color: "#fff",
                              textAlign: "center",
                              fontSize: "0.7em",
                            }}
                          >
                            50%
                          </b>
                        </div>
                      )}

                      {true && <div></div>}
                      <div
                        className="position-relative"
                        style={{ zIndex: "0" }}
                      >
                        <Card.Img variant="top" src={item.img} />
                        {item.is_ship && (
                          <img
                            src={img_ship}
                            alt=""
                            className="d-block sale position-absolute"
                            style={{ bottom: "0", left: "0" }}
                          />
                        )}
                      </div>
                      <Card.Body className="">
                        <div
                          className="card-text"
                          style={{ fontSize: "0.8em" }}
                        >
                          {item.text}
                          <Row>
                            <Col className="px-0 py-2">
                              <p className="mb-0  mx-2 d-block">
                                <b
                                  style={{ color: "red", fontSize: "1.2em" }}
                                >{`${item.price}đ`}</b>
                              </p>
                            </Col>
                            <Col className="px-0">
                              <p className=" text-center mb-0 d-block">
                                da ban 2.3k san pham
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))} 
            </Row>
          </Col> */}
          <Col> 
            {cartList.map( (item, index) => 
              <CartLine key={`cartItem-${index}`} cartItem={item} hidden={true}/>
            )}
            <Row className="hr-order1">
              <Col lg={6} className="text-left"></Col>
              <Col lg={6} className="text-right txt-order-blue">
                <Link to="/">Rokida Voucher</Link>
                <ul>
                  <li>
                    <span className="txt-order">Tất cả {cartList.length} sản phẩm</span>{" "}
                    <span className="txt-cart1">{cartList.reduce((accu, curr) => {
                      return accu + curr.total_price;
                    }, 0)}</span>
                  </li>
                  <li>Voucher freeship</li>
                  <li className="txt-red">0đ</li>
                  <li>
                    <p>
                      <span className="txt-order-black">TỔNG:</span>
                      <span className="txt-order-red">{cartList.reduce((accu, curr) => {
                        return accu + curr.total_price;
                      }, 0)}</span>
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="detail-header-right text-right">
              <button className="button-order2" onClick={handleCartStatusUpdate}>ĐẶT HÀNG</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(Checkout);
