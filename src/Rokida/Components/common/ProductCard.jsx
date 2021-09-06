import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img_ship from '../../images/icon-ship2.png';
import img_sale from '../../images/saleproduct.png';

ProductCard.propTypes = {};

function ProductCard(props) {
  return (
    <div className="position-relative sale__item">
      <Card className="card__item position-static">
        {props.item.is_sale && (
          // <img src={img_sale} alt="" className="d-block sale position-absolute" style={{top : '10px' , right : '10px'}} />
          <div
            className="d-block sale position-absolute p-2"
            style={{
              zIndex: '10000',
              top: '30px',
              right: '20px',
              backgroundImage: `url(${img_sale})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <b className="d-block" style={{ color: '#fff', textAlign: 'center', fontSize: '0.7em' }}>
              50%
            </b>
          </div>
        )}
        <NavLink to={`/detail?slug=${props.item.slug}`} className="position-relative" style={{ zIndex: '0' }}>
          <Card.Img variant="top" src={props.item.image[0]} />
          {props.item.is_ship && (
            <img src={img_ship} alt="" className="d-block sale position-absolute" style={{ bottom: '0', left: '0' }} />
          )}
        </NavLink>
        <Card.Body className="">
          <div className="card-text" style={{ fontSize: '0.8em' }}>
            <NavLink to={`/detail?slug=${props.item.slug}`}>{props.item.name}</NavLink>
            <Row>
              <Col className="px-0 py-2">
                <p className="mb-0  mx-2 d-block">
                  <b style={{ color: 'red', fontSize: '1.2em' }}>{`${props.item.price}đ`}</b>
                </p>
              </Col>
              <Col className="px-0">
                <p className=" text-center mb-0 d-block">da ban {props.item.consumed} san pham</p>
              </Col>
            </Row>
          </div>
        </Card.Body>
        <p
          className=" mb-0 text-center position-absolute detail text-center"
          style={{ background: 'red', bottom: '-10px', width: '90%', margin: 'auto' }}
        >
          xem them cac san pham tuong tu
        </p>
      </Card>
    </div>
  );
}

export default ProductCard;
