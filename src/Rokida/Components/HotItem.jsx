import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import img_Item1 from '../images/products/Thietbidientu.png';
import img_Item2 from '../images/products/phukiendientu.png';
import img_Item3 from '../images/products/thietbigiadung.png';
import img_Item4 from '../images/products/suckhoelamdep.png';
import img_Item5 from '../images/products/mevabe.png';
import img_Item6 from '../images/products/thoitrangnam.png';
import img_Item7 from '../images/products/thoitrangnu.png';
import img_Item8 from '../images/products/phukienthoitrang.png';
import img_Item9 from '../images/products/thethaodulich.png';
import img_Item10 from '../images/products/otoxemay.png';
import img_Item11 from '../images/products/nhasachonline.png';
import img_Item12 from '../images/products/trangsucphongthuy.png';
import img_Item13 from '../images/products/tuixachvi.png';
import img_Item14 from '../images/products/caycanhhatgiong.png';
import img_Item15 from '../images/products/bachhoaonline.png';
import img_Item16 from '../images/products/voucherdichvu.png';
import banner_foodsale from '../images/products/banner-foodsale.jpeg';

const HotItem = () => {
  return (
    <>
      <Container className="mt-5 hot__item">
        <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Mặt hàng Hot</h3>
        <Row className="mx-0 text-center">
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item1} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Thiết bị điện tử</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item2} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Phụ kiện điện tử</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item3} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Thiết bị gia dụng</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item4} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Sức khoẻ và làm đẹp</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item5} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Mẹ và bé</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item6} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Thời trang Nam</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item7} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Thời trang Nữ</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item8} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Phụ kiện thời trang</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item9} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Thể thao - Du lịch</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item10} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Ôtô - Xe máy</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item11} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Nhà sách online</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item12} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Trang sức phong thuỷ</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item13} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Túi xách - ví</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item14} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Cây cảnh - hạt giống</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item15} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Bách hoá online</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item15} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Bách hoá online</h6>
          </Col>
          <Col className="text-center item" lg={1} sm={6}>
            <img src={img_Item16} alt="" />
            <h6 style={{ fontWeight: 'bold' }}>Voucher và dịch vụ</h6>
          </Col>
          <Col className="text-center banner-small pt-3">
            <div className="item-img"><img src={banner_foodsale} alt=""/></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(HotItem);
