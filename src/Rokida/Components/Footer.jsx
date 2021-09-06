import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Layout.less';
import '../css/Responesive.css';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo-footer.png';
import { ListFooter1, ListFooter2 } from '../DataFake/ListFooter';
import { Link } from 'react-router-dom';
import visa from '../images/logo/logo-visa.png';
import mastercard from '../images/logo/logo-mastercard.png';
import jcb from '../images/logo/logo-jcb.png';
import momo from '../images/logo/icon-momo.png';
import viettelpay from '../images/logo/logo-viettelpay.png';
import airpay from '../images/logo/logo-airpay.png';
import ghn from '../images/logo/logo-ghn.png';
import ghtk from '../images/logo/logo-ghtk.png';
import grabexpress from '../images/logo/logo-Grab-express.png';
import vietnampost from '../images/logo/logo-vietnampost.png';
import viettelpost from '../images/logo/logo-viettelpost.png';
import bestexpress from '../images/logo/logo-bestexpress.png';

const Footer = () => {
  const [footerList1, setFooterList1] = useState([]);
  const [footerList2, setFooterList2] = useState([]);
  useEffect(() => {
    const loadItem = async () => {
      await setFooterList1(ListFooter1);
      await setFooterList2(ListFooter2);
    };
    loadItem();
  }, []);
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <img src={logo} alt="" id="logo" className="text-center" />
            <h6 className="color-black">Thanh toán</h6>
            <div className="footer-links text-center">
              <Link to="/">
                {' '}
                <img src={visa} alt="" key="visa" />
              </Link>
              <Link to="/">
                {' '}
                <img src={mastercard} alt="" key="mastercard" />
              </Link>
              <Link to="/">
                {' '}
                <img src={jcb} alt="" key="jcb" />
              </Link>
              <Link to="/">
                {' '}
                <img src={momo} alt="" key="momo" />
              </Link>
              <Link to="/">
                {' '}
                <img src={viettelpay} alt="" key="viettelpay" />
              </Link>
              <Link to="/">
                {' '}
                <img src={airpay} alt="" key="airpay" />
              </Link>
            </div>
            <h6 className="color-black">Đơn vị vận chuyển</h6>
            <div className="footer-links text-center">
              <Link to="/">
                {' '}
                <img src={ghn} alt="" key="ghn" />
              </Link>
              <Link to="/">
                {' '}
                <img src={ghtk} alt="" key="ghtk" />
              </Link>
              <Link to="/">
                {' '}
                <img src={grabexpress} alt="" key="grabexpress" />
              </Link>
              <Link to="/">
                {' '}
                <img src={vietnampost} alt="" key="vietnampost" />
              </Link>
              <Link to="/">
                {' '}
                <img src={viettelpost} alt="" key="viettelpost" />
              </Link>
              <Link to="/">
                {' '}
                <img src={bestexpress} alt="" key="bestexpress" />
              </Link>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <h6>Chăm sóc khách hàng</h6>
            <ul className="footer-links">
              {footerList1.map((item, index) => (
                <Nav.Link to={item.href} key={'footer1-' + index}>
                  {item.name}
                </Nav.Link>
              ))}
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h6>Về Rokida</h6>
            <ul className="footer-links">
              {footerList2.map((item, index) => (
                <Nav.Link to={item.href} key={'footer2-' + index}>
                  {item.name}
                </Nav.Link>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="text-center">
              <h5>CÔNG TY CỔ PHẦN BILLIONAIRE</h5>
              <li>Landmark 5, Nguyễn Hữu Cảnh, P.22, Quận Bình Thạnh, TP.HCM</li>
              <li>www.billionaire.vn</li>
              <li>info@billionaire-group.vn</li>
            </ul>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      <Container>
        <Row>
          <Col sm={8} md={6} xs={12}>
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by <Link to="/">Billionaire</Link>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default React.memo(Footer);
