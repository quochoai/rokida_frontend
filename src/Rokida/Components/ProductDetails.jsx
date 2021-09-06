import { unwrapResult } from "@reduxjs/toolkit";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { addToCart } from "Rokida/slices/cartSlice";
import productApi from "../api/productApi";
import IncreaseNumberInput from "../Components/IncreaseNumberInput";
import SlideshowGallery from "../Components/SlideshowGallery";
import img_ship from "../images/icon-ship2.png";
import item_sp1 from "../images/item_sp1.png";
import item_sp2 from "../images/item_sp2.png";
import item_sp3 from "../images/item_sp3.png";
import img_account from "../images/logo/account.png";
import img_sale from "../images/saleproduct.png";
import user from "../images/user.png";
import RadioButton from "./RadioButton";

const items = [
  { src: item_sp3, alt: "Caption one" },
  { src: item_sp3, alt: "Caption one" },
  { src: item_sp1, alt: "Caption two" },
  { src: item_sp1, alt: "Caption two" },
];

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [productDetail, setProductDetial] = useState({});

  const [order, setOrder] = useState({
    qty: 1,
  });

  const [breadcrumbs, setBreadcrumbs] = useState(["Rokida"]);
  const [classifyUI, setClassifyUI] = useState({});
  const [isValidClassify, setIsValidClassify] = useState(true);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const params = queryString.parse(location.search);
        const prtDetailResponseData = await productApi.get(params.slug);
        const prtDetail = {...prtDetailResponseData.data[0]};

        setProductDetial(prtDetail);

        const tempClassifyUI = {};
        prtDetail.classify.forEach(x => {
          if (!Object.getOwnPropertyNames(tempClassifyUI).includes(x.classify_key)) 
            tempClassifyUI[x.classify_key] = [];
          else 
            tempClassifyUI[x.classify_key].push(x.classify_value);
        })
        setClassifyUI(tempClassifyUI);
        
        setBreadcrumbs(["Rokida", prtDetail.categories_name, prtDetail.name]);
      } catch (error) {
        console.log("Fail to fetch product detail: ", error);
      }
    };

    loadItem();
  }, [location.search]);

  const increaseNumberInputHandler = (number, replace) => {
    if (replace) setOrder({ ...order, qty: number });
    else {
      const newQty = parseInt(order.qty) + parseInt(number);
      setOrder({ ...order, qty: newQty > 1 ? newQty : 1 });
    }
  };

  const onRadioButtonChangeHandler = (event, name) => {
    setOrder({ ...order, classify: {...order.classify, [name]: event.target.value} });
  }

  const onOrderNowHandler = (event) => {
    event.preventDefault();
    // localStorage.setItem("Order", JSON.stringify(order));
    // listOrder.push(order);
    //Validate input
    //Save Order
    // history.push("/Order");
    //Redirect to Payment
  };

  const onAddToCartClickHandler = (event) => {
    event.preventDefault();

    const addToCartHandle = async () => {
      try {
        const action = addToCart({
          slug: productDetail.slug,
          data: {
            quantity: order.qty,
            categories: JSON.stringify(order.classify??null) // sample: "Size 36, Color Đỏ"
          }
        });
        const cartResult = await dispatch(action);
        const result = unwrapResult(cartResult);

        console.log("cartResult", result);
        history.push("/Order");
      } catch (error) {
        console.log("Add to Cart failed:", error.message);
      }
    }

    if (Object.keys(order.classify||{}).length !== Object.keys(classifyUI||{}).length) {
      setIsValidClassify(false);
      console.log("Vui lòng chọn phân loại hàng")
    } else {
      addToCartHandle();
    }
  };

  return (
    <>
      <Container className="detail-item mt-3">
        <Row>
          <ul className="breadcrumb-rokida">
            {breadcrumbs.map((item, index) => (
              <li key={"breadcrumbs-" + index}>
                <Link to="/">{item}</Link>
              </li>
            ))}
          </ul>
        </Row>
        <Row className="detail-header">
          <Col className="detail-header-left px-0" md={6}>
            <img
              src={user}
              className="img-fluid rounded-circle "
              id="img__user"
              alt=""
            />
            <Link to="/">Moon shop</Link> | <Link to="/">Xem shop</Link>
          </Col>
          <Col className="detail-header-right text-right px-0" md={6}>
            <Link to="/">Xem chi tiết đơn hàng</Link> |{" "}
            <Link to="/">Đánh giá</Link>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={5}>
            <SlideshowGallery items={items} />
          </Col>
          <Col lg="7" md={7}>
            <Form>
              <Row>
                <Col>
                  <b>
                    {productDetail.name} -{" "}
                    <span className="text-danger">Giảm giá 30%</span>
                  </b>
                </Col>
              </Row>
              <Row>
                <div className="stars border-bottom">
                  <input
                    className="star star-5"
                    id="star-5"
                    type="radio"
                    name="star"
                  />
                  <label className="star star-5" htmlFor="star-5"></label>
                  <input
                    className="star star-4"
                    id="star-4"
                    type="radio"
                    name="star"
                  />
                  <label className="star star-4" htmlFor="star-4"></label>
                  <input
                    className="star star-3"
                    id="star-3"
                    type="radio"
                    name="star"
                  />
                  <label className="star star-3" htmlFor="star-3"></label>
                  <input
                    className="star star-2"
                    id="star-2"
                    type="radio"
                    name="star"
                  />
                  <label className="star star-2" htmlFor="star-2"></label>
                  <input
                    className="star star-1"
                    id="star-1"
                    type="radio"
                    name="star"
                  />
                  <label className="star star-1" htmlFor="star-1"></label>
                </div>
                <div className="border-bottom">Nhận Xét | Đã Bán</div>
              </Row>
              <Row>
                <Col>
                  <div>
                    <br />
                    <h4 className="text-danger">{productDetail.price}</h4>
                    <p>
                      Mua sỉ <span className="text-danger">&#62; 5</span> sản
                      phẩm với gía chỉ{" "}
                      <span className="text-danger">950.000đ</span>
                      <br />
                      <span className="italic-dim">
                        ***Miễn phí vận chuyển cho đơn hàng từ 02 sản phẩm
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                {/* <Col md={5}>
                  <label>
                    Vận chuyển tới
                    <input type="text" name="name1" placeholder="Phường Bến Nghé, Q1" />
                  </label>
                  <label>
                    Đơn vị vận chuyển
                    <input type="text" name="name2" placeholder="Giao hàng tiết kiệm" />
                  </label>
                  <label>
                    Phí vị vận chuyển
                    <input type="text" name="name3" placeholder="100.000đ - 150.000đ" />
                  </label>
                </Col> */}
                <Col md={7}>
                  <Row>
                    <Col md={6}>
                      Số lượng
                      <IncreaseNumberInput orderQty={order.qty} onIncreaseNumberInputClick={increaseNumberInputHandler}/>
                    </Col>
                  </Row>
                  {Object.entries(classifyUI).map(([propertyName, propertyValue]) => 
                    <Row key={`classify${propertyName}`}>
                      <Col>
                        <RadioButton name={propertyName} items={propertyValue} onChange={onRadioButtonChangeHandler}/>
                      </Col>
                    </Row>
                  )}
                  <Row>
                    <Col>
                      {!isValidClassify && "Vui lòng chọn phân loại hàng"}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <button onClick={onAddToCartClickHandler}>
                    Thêm vào giỏ hàng
                  </button>
                  <button onClick={onOrderNowHandler} className="buy">
                    Mua ngay
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h5>
              <b>Chi tiết sản phẩm</b>
            </h5>
            <br />
            <p>SHOP K&K BEDDING KÍNH CHÀO QUÝ KHÁCH</p>
            <p>SHOP XIN CAM KẾT:</p>
            <p>
              - Hàng thật, đúng mô tả, quảng cáo mọi thông tin sai lệch quảng
              cáo shop xin chịu trách nhiệm.
            </p>
            <p>
              - 100% Đổi trả miễn phí với sản phẩm phát sinh lỗi từ nhà sản
              xuất.
            </p>
            <p>- Giữ hoá đơn dán trên kiện hàng để làm căn cứ bảo hành.</p>
            <p>
              - Trong quá trình vận chuyển rất dễ có khả năng hàng hoá bị bể vỡ
              hoặc mất hàng. Shop sẽ chịu hoàn toàn 100% cho các trường hợp trên
              với điều kiện QUÝ KHÁCH VUI LÒNG QUAY VIDEO KHI MỚI MỞ HÀNG để làm
              bằng chứng, các đơn hàng không đủ bằng chứng shop xin phép từ
              chối.
            </p>
          </Col>
        </Row>
        <div className="hr-detail pt-3"></div>
        <Row>
          <Col lg={3}>
            <Row>
              <h6 style={{ margin: "0 0.5rem 1rem" }}>
                <b>Sản phẩm tương tự</b>
              </h6>
              <div key={"ProductDetial"}>
                <div className="position-relative sale__item">
                  <Card className="card__item position-static">
                    {productDetail.is_sale && (
                      <div
                        key={"is_sale"}
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
                    <div className="position-relative" style={{ zIndex: "0" }}>
                      <Card.Img variant="top" src={productDetail.img} />
                      {productDetail.is_ship && (
                        <img
                          key={"is_ship"}
                          src={img_ship}
                          alt=""
                          className="d-block sale position-absolute"
                          style={{ bottom: "0", left: "0" }}
                        />
                      )}
                    </div>
                    <Card.Body className="">
                      <div className="card-text" style={{ fontSize: "0.8em" }}>
                        {productDetail.text}
                        <Row>
                          <Col className="px-0 py-2">
                            <p className="mb-0  mx-2 d-block">
                              {/* <b style={{ color: 'red', fontSize: '1.2em' }}>{`${productDetail.price.toFixed(3)}đ`}</b> */}
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
            </Row>
          </Col>
          <Col lg={9}>
            <h6>
              <b>Đánh giá sản phẩm</b>
            </h6>
            <div className="logo w-100 text-left mt-4">
              <p>
                <img src={user} id="img__user" alt="" />
                {user.full_name}
              </p>
              Chăn rất đẹp luôn nha, giá phù hợp, có điều mình có nhắn shop chọn
              màu xanh mình tưởng màu xanh kia nhưng màu này là màu xanh đen đen
              ý, không thích lắm nhưng vì hàng chất lượng nên ok hết. Nên mua mn
              nhé.
              <img src={item_sp2} alt="" />
              <img src={item_sp3} alt="" />
            </div>
            <div className="logo w-100 text-left mt-4">
              <p>
                <img src={user} id="img__user" alt="" />
                {user.full_name}
              </p>
              Chăn rất đẹp luôn nha, giá phù hợp, có điều mình có nhắn shop chọn
              màu xanh mình tưởng màu xanh kia nhưng màu này là màu xanh đen đen
              ý, không thích lắm nhưng vì hàng chất lượng nên ok hết. Nên mua mn
              nhé.
              <img src={item_sp2} alt="" />
              <img src={item_sp3} alt="" />
              <p className="ml-4 mt-2">
                <img src={img_account} alt="" /> Moon shop |{" "}
                <Link to="/#">Xem shop</Link>
              </p>
              Cảm ơn bạn đã ủng hộ. Yêu quá nè...
            </div>
            <div className="logo w-100 text-left mt-4">
              <p>
                <img src={user} id="img__user" alt="" />
                {user.full_name}
              </p>
              Chăn rất đẹp luôn nha, giá phù hợp, có điều mình có nhắn shop chọn
              màu xanh mình tưởng màu xanh kia nhưng màu này là màu xanh đen đen
              ý, không thích lắm nhưng vì hàng chất lượng nên ok hết. Nên mua mn
              nhé.
              <img src={item_sp2} alt="" />
              <img src={item_sp3} alt="" />
              <p className="ml-4 mt-2">
                <img src={img_account} alt="" /> Moon shop |{" "}
                <Link to="/#">Xem shop</Link>
              </p>
              Cảm ơn bạn đã ủng hộ. Yêu quá nè...
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(ProductDetails);
