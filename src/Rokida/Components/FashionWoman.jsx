import React, { useEffect , useState } from 'react'
import { StartTime , TimeSale } from '../DataFake/TimeSale'
import { Container , Row , Col } from 'react-bootstrap'
const FashionWoman = () => {
    const [hours , setHours] = useState('00')
    const [minutes , setMinutes] = useState('00')
    const [seconds , setSeconds] = useState('00')
    const [day , setDay] = useState("00")
    useEffect(() => {
        const loadItem = async () => {
            const timeData = TimeSale
            await StartTime(setHours , setMinutes , setSeconds , setDay,  timeData)
        }
        loadItem()
    },[])
    return(
        <article>
            <Container className="my-3">
                <h3 style={{fontWeight : 'bold' , textTransform : 'uppercase'}}>Thời trang nữ</h3>
                <Row className="px-0 mx-0">
                    <Col lg={2} md={4} className='px-0'>
                        <p><b>Đang bán</b></p>
                    </Col>
                    <Col  className='px-0'>
                        <p>
                            <b>Tiếp tục trong</b>  &nbsp;
                            <b className="time">{day}</b> : &nbsp;
                            <b className="time">{hours}</b> : &nbsp;
                            <b className="time">{minutes}</b> :&nbsp;
                            <b className="time">{seconds}</b> &nbsp;
                        </p>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}
export default React.memo(FashionWoman)