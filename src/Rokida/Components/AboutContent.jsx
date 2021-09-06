import React from "react"
import { Container, Row, Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import icon_mail from '../images/logo/mail.png'
import icon_phone from '../images/logo/phone.png'
import icon_location from '../images/logo/location.png'


const AboutContent = () => {
    return (
        <>
            <Container fluid="true">
                <Row className="bg_help">
                    <Container>
                        <Row className="bg_help2">
                            <Col md={{ span: 6, offset: 6 }}>
                                <div className="menu-icon text-right">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <form className="about-form">
                                    <h3>Chúng tôi có thể giúp gì cho bạn. Hãy gửi câu hỏi cho chúng tôi.</h3>
                                    <textarea/>
                                    <input type="submit" value="Gửi" />
                                </form>
                            </Col>
                        </Row>
                        <Row className="help-bottom">
                            <Col><Link to="/">Về trang cá nhân</Link></Col>
                            <Col className="text-center arrow-down"><Link to="/">Tạo gian hàng</Link></Col>
                            <Col className="text-right">
                                <Link to="/"><img src={icon_mail} alt="" /></Link>
                                <Link to="/"><img src={icon_phone} alt="" className="mr-2 ml-2"/></Link>
                                <Link to="/"><img src={icon_location} alt="" /></Link>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(AboutContent)