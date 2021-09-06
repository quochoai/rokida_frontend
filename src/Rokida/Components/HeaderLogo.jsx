import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Layout.less';
import '../css/Responesive.css';
import logo from '../images/logo.gif';
import userImage from '../images/user.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const HeaderLogo = () => {
  
  const userLogedin = useSelector(state => state.user.current);
  const isLogin = !!userLogedin.id;

  return (
    <header>
      <Navbar navbar="" expand="lg">
        <Navbar.Toggle aria-controls="navbar__rokida" className="ml-auto mr-auto bg_header" />
        <Navbar.Collapse id="navbar__rokida">
          <Container className="header__info text-center bg_header">
            <Nav className="mr-auto">
              <Nav.Item className=" active">
                <Nav.Link href="/#">Tải ứng dụng</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="mr-auto ml-auto">
              <Nav.Item className=" active">
                <img src={logo} alt="" id="logo" />
              </Nav.Item>
            </Nav>
            <Nav className="">
              <Nav.Item className=" active">
                <Nav.Link href="/#">Thông báo</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" character">
                <Nav.Link>|</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" ">
                <Nav.Link href="/Support">Trợ giúp</Nav.Link>
              </Nav.Item>
              {isLogin && <> 
                <Nav.Item>
                  <Nav.Link href="/User">
                    <img src={userImage} className="img-fluid rounded-circle" id="img__user" alt="" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className=" ">
                  <Nav.Link href="/User">Xin chào {userLogedin.first_name}</Nav.Link>
                </Nav.Item>
              </> }
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default React.memo(HeaderLogo);
