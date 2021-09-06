import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'

import img_Icon1 from '../images/icon-sale.png'
import img_Icon2 from '../images/icon-freeship.png'
import img_Icon3 from '../images/icon-priceshock.png'
import img_Icon4 from '../images/icon-ship.png'
import img_Icon5 from '../images/icon-international.png'
import img_Icon6 from '../images/icon-electsuper.png'
const BannerSub = () => {
    return(
        <>
        <Container className="mt-5">
            <Row>
                <Col className="text-center">
                    <img src={img_Icon1} alt=""/>
                    <h6 style={{fontWeight : 'bold'}}>Siêu khuyến mãi</h6>
                </Col>
                <Col className="text-center">
                    <img src={img_Icon2} alt=""/>
                    <h6 style={{fontWeight : 'bold'}}>Free Ship</h6>
                </Col>
                <Col className="text-center">
                    <img src={img_Icon3} alt=""/>
                    <h6 style={{fontWeight : 'bold'}}>Giờ vàng</h6>
                </Col>
                <Col className="text-center">
                    <img src={img_Icon4} alt=""/>
                    <h6 style={{fontWeight : 'bold'}}>Trả hàng hoàn tiền</h6>
                </Col>
                <Col className="text-center">
                    <img src={img_Icon5} alt=""/>
                    <h6 style={{fontWeight : 'bold'}}>Hàng Quốc Tế</h6>
                </Col>
                <Col className="text-center">
                    <img src={img_Icon6} alt=""/>
                    <h6 style={{fontWeight : 'bold'}}>Sách điện tử</h6>
                </Col>
            </Row>
        </Container>
        <div className="my-2">
            <h3 className="sologan">THÁNG VÀNG KHUYẾN MÃI SIÊU SALE 70%</h3>
        </div>
        </>
    )
}
export default React.memo(BannerSub)