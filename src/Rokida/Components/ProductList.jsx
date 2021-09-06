import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_Banner from '../images/products/banner-foodsale.jpeg'

const ProductList = () => {
    return (
        <>
            <Container className="mt-5">
            <Row className="my-3">
                <Col lg="8">
                    <p>Sắp xếp theo</p>
                    <hr/>
                    <select className="filter-items round">
                        <option value="grapefruit">Đen</option>
                        <option value="lime">Đỏ</option>
                        <option defaultValue value="coconut">Màu sắc</option>
                        <option value="mango">Trắng</option>
                    </select>
                    <select className="filter-items round">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue value="coconut">Kiểu dáng</option>
                        <option value="mango">Mango</option>
                    </select>
                    <select className="filter-items round">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue value="coconut">Giá</option>
                        <option value="mango">Mango</option>
                    </select>
                    <select className="filter-items round">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue value="coconut">Tình trạng</option>
                        <option value="mango">Mango</option>
                    </select>
                    <select className="filter-items round">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue value="coconut">Nơi bán</option>
                        <option value="mango">Mango</option>
                    </select>
                    <select className="filter-items round">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue value="coconut">Loại shop</option>
                        <option value="mango">Mango</option>
                    </select>
                </Col>
                <Col lg="3" className="text-right">
                    <img src={img_Banner} alt=""  />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default React.memo(ProductList)