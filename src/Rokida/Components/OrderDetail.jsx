import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCartList, updateCartStatus } from "Rokida/slices/cartSlice";
import CartLine from "./CartLine";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const unknown = ["Rokida", "Thanh toán"];
  const [cartList, setCartList] = useState([]);
  const [cartIDList, setCartIDList] = useState([]);
  const [allCartChecked, setAllCartChecked] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      try {
        const action = getCartList();
        const actionResult = await dispatch(action);
        const responseCartList = unwrapResult(actionResult);
        if (responseCartList) {
          const newCartList = responseCartList.map(item => ({...item, selected: false}))
          setCartList([...newCartList]);
        }

        // console.log(setCartList);
      } catch (error) {
        console.log("Get Cart List fail:", error.message);
      }
    }

    getItem();
  }, [dispatch]);

  const handleSelected = (event, selectedItem) => {
    const value = event.target.value;
    const checked = event.target.checked;

    //update param for confirm API
    const newCheckboxList = [...cartIDList];
    const index = newCheckboxList.indexOf(value);
    checked ? newCheckboxList.push(value) : newCheckboxList.splice(index, 1);
    setCartIDList(newCheckboxList);

    //update current checkbox status
    const newCartList = cartList.map(item => item.id === selectedItem.id ? {...item, selected: checked } : {...item});
    setCartList(newCartList);

    //update checkAll checkbox status
    const allCartSelected = newCartList.reduce((accu, curr) => accu ? curr.selected : false, true);
    setAllCartChecked(allCartSelected);
  }

  const handleSelectAll = (event) => {    
    const checked = event.target.checked;
    setAllCartChecked(event.target.checked);

    //udpate all checkbox status
    const newCartList = cartList.map(item => ({...item, selected: checked}));
    setCartList(newCartList);

    //update params for confirm API
    const newCheckboxList = cartList.map(item => item.id);
    checked ? setCartIDList(newCheckboxList) : setCartIDList([]);
  }

  const handleCartStatusUpdate = (event) => {
    event.preventDefault();

    const updateStatus = async () => {
      try {
        const params = {id_cart: cartIDList};
        const action = updateCartStatus(params);
        const result = await dispatch(action);
        const unwrapCartUpdateResult = unwrapResult(result);
        console.log(unwrapCartUpdateResult);

        history.push("/checkout");
      } catch (error) {
        console.log("Fail to call action updateCartStatus:", error.message);
      }
    }

    if (cartIDList.length <= 0) {
      console.log("Please choose at less 1 product!")
    } else {
      updateStatus();
    }
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
                label="Nguyễn Thuý: Landmark 5, Vinhomes Central Park, Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Hồ Chí Minh"
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
              <CartLine key={`cartItem-${index}`} cartItem={item} onChange={handleSelected}/>
            )}
            <Row className="hr-order1">
              <Col lg={6} className="text-left">
                <Form.Group controlId="formBasicCheckboxTotal">
                  <Form.Check type="checkbox" label="Chọn tất cả" checked={allCartChecked} onChange={handleSelectAll}/>
                </Form.Group>
              </Col>
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

export default React.memo(OrderDetail);
