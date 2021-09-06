import React ,{ useEffect , useState } from "react"
import bannerSale from '../images/bannerSale.jpeg'
import banner_SuperSale1 from '../images/banner-sieusale-2.png'
import { Container , Row , Col } from 'react-bootstrap'

import { data  , PaginationData} from '../DataFake/superSale'
const RokidaMall = () => {
    const [Product , setProduct] = useState([])
    const [limit] = useState(6)
    const [page , setPage] = useState(1)
    useEffect(() => {
        const loadItem = async () => {
            const sale = data
            await setProduct(PaginationData(sale , page , limit))
        }
        loadItem()
    },[page,limit])
    const changePage = () => {
        if(Product.length < limit){
            return setPage(1)
        }
        else {
            return setPage(page+1)
        }
    }
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <img src={banner_SuperSale1} alt="" className=" d-block" />
                        </Col>
                        <Col>
                            <img src={banner_SuperSale1} alt="" className="d-block" />
                        </Col>
                    </Row>
                </Col>
                <Col md={8}>
                    <Row>
                        {Product.map((item , index) => (

                        <Col md={4} className="text-center pt-3" key={index}>
                            <img src={item.image} alt="" className="d-block" />
                            <p className="py-1 mt-3 mb-0 px-1 text-bold" style={{borderRadius : '10px' , border : '2px solid #ccc' , width : '50%' , fontWeight : 'bold'}}>giam toi 
                                &nbsp;
                                <b style={{color : 'red'}}>{`${item.discount}%`}</b>
                            </p>
                        </Col>
                        ))}
                    </Row>
                    <div className="text-center my-4">
                        <button onClick={changePage}  style={{padding : '5px 2px' , borderRadius : '10px' , background : '#e6e7e8' , outline : 'none' , border : '1px solid #ccc'}}>RokiTa Mall <span className="character" style={{color : '#fff'}}>{'>'}</span></button>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="my-2">
            <img src={bannerSale} alt="" className="d-block w-100" />
        </div>
        </>
    )
}
export default React.memo(RokidaMall)