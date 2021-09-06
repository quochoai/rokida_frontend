import React, { useState, useEffect } from 'react';
import { Img_Banner, Img_Banner_home1, Img_Banner_home2, Img_Banner_sefl } from '../DataFake/Banner';
import { ListProduct, ListProductProp1 } from '../DataFake/ListProduct';
import { Container, Row, Col, Nav, Navbar, Carousel } from 'react-bootstrap';
import Loading from '../Other/Loading';
const Banner = () => {
  const [productList, setProductList] = useState([]);
  const [productProp1, setProductProp1] = useState([]);
  const [banner, setBanner] = useState([]);
  const [bannerSefl, setBannerSelf] = useState([]);
  const [bannerHome1, setBannerHome1] = useState([]);
  const [bannerHome2, setBannerHome2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const loadItem = async () => {
      await setIsLoading(true);
      await setProductList(ListProduct);
      await setProductProp1(ListProductProp1);
      await setBanner(Img_Banner);
      await setBannerSelf(Img_Banner_sefl);
      await setBannerHome1(Img_Banner_home1);
      await setBannerHome2(Img_Banner_home2);
    };
    loadItem();
  }, []);

  // const onClickHandler = (index) => {
  //   setBannerIndex(index);
  // };

  return (
    <div className="Banner">
      {!isLoading && <Loading />}
      <div className="my-2">
        <Container fluid>
          <Row>
            <Col md={2} className="p-0">
              <Navbar navbar="light" expand="lg">
                <Navbar.Toggle aria-controls="rokida__product" className="ml-auto mr-auto" />
                <Navbar.Collapse className="" id="rokida__product">
                  <Nav className="nav__right">
                    <ul style={{ fontSize: '.95rem' }}>
                      <li style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Danh mục hàng</li>
                      <ul className="dropright-content-subnav">
                      {productList.map((item, index) => (
                        <li className="nav-right-item dropright" key={index}>
                          <Nav.Link href={item.href} style={{ padding: '.35rem 0 0 0' }} className="dropbtn">
                            {item.name}
                          </Nav.Link>
                          <ul className="nav-right-item dropright-content">
                      {productProp1.map((item, index) => (
                        <li className="nav-right-item " key={index}>
                          <Nav.Link href={item.href} style={{ padding: '.35rem 0 0 0' }} className="">
                            {item.name}
                          </Nav.Link>
                        </li>
                      ))}
                      </ul>
                        </li>
                      ))}
                      </ul>
                      
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col md={7} className="p-0" style={{ borderTop: '1px solid none' }}>
              <Carousel
                className="banner position-relative h-100  "
                controls={false}
                slide={true}
                indicators={false}
                // activeIndex={bannerIndex}
              >
                {banner.map((item, index) => (
                  <Carousel.Item className="carousel-item" key={index}>
                    <img className="d-block w-100" src={item.src} alt="First slide" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={3} className="h-100 img_self">
              {bannerSefl.map((item, index) => (
                <img
                  src={item.src}
                  className="img-fluid  pt-xl-0 w-100 d-lg-block d-xl-block mb-3"
                  alt=""
                  key={index}
                  // onClick={() => onClickHandler(index)}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-2">
        <Container fluid>
          <Row>
            <Col md={12} lg={7} xl={6}>
              {bannerHome1.map((item, index) => (
                <img src={item.src} className="img-fluid pt-3 w-100 d-lg-block" alt="" key={index} />
              ))}
            </Col>
            <Col>
              {bannerHome2.map((item, index) => (
                <img src={item.src} className="img-fluid pt-3 w-100 d-lg-block" alt="" key={index} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default React.memo(Banner);
