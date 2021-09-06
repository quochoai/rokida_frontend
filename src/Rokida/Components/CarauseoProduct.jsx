import React  , { useState , useEffect } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
// import Slider from "react-slick";
import { data  , PaginationData} from '../DataFake/Sale'
import img_sale from '../images/sale.png'
import img_ship from '../images/icon-ship2.png'
import Slick from './Slick'
const CarauseoProduct = () => { 
    const [dataSale , setSale] = useState([])
    const [limitItem , setLimitItem] = useState(0)
    useEffect(() => {
        const loadItem = async () => {
            const sale = data
            const limit = PaginationData(data).length
            await setLimitItem(limit)
            await setSale(sale)
        }
        loadItem()
    },[])
    const settings = {
        autoplay : true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: limitItem,
        slidesToScroll: 1,
        responsive: [
            {   
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {   
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    
    return(
        <Container className="my-2">
            <Slick settings={settings}>
                    {dataSale.map((item, index)=> (
                        <div key={index} className="position-relative">
                            <Card className="card__item position-static">
                                <img src={img_sale} alt="" className="d-block sale position-absolute" style={{top : '-10px' , right : '-10px'}} />
                                <div className="position-relative" style={{zIndex : '0'}}>
                                <Card.Img variant="top" src={item.img} />
                                    <img src={img_ship} alt="" className="d-block sale position-absolute" style={{bottom : '0' , left : '0'}} />
                                </div>
                                <Card.Body className="">
                                    <div className="text-muted card-text">
                                        {item.text}
                                        <Row className="my-2 mx-2 text-center h-100">
                                            <div className="price ">
                                                <b className="text-white mb-0 d-block">{`${item.price.toFixed(3)}đ`}</b>
                                            </div>
                                            <div className="price__old align-text-bottom d-flex">
                                                <b className="text-white mb-0 mt-2 mx-2 d-block">{`${item.price__old.toFixed(3)}đ`}</b>
                                            </div>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slick>
        </Container>
    )
}
export default React.memo(CarauseoProduct)