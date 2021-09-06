import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const IncreaseNumberInput = () => {
    

    const [products, setProducts] = useState({
        count: 0
    })

    const handleChange = (e) => {
        
        setProducts({count: Math.round(Number(e.target.value) || 0)})
    }

    const decrease = (e) => {
        if(products.count <= 0){
            return 
        }
        setProducts({count: products.count - 1})
    }

    return (
        <Container className="increase-number-order">
            <Row>
                <Col md={2}><input type='button' onClick={decrease} value="-"/></Col>
                <Col md={2}><input type='text' value={products.count} onChange={handleChange}/></Col>
                <Col md={2}><input type='button' onClick={() => setProducts({count: products.count + 1})}  value="+"/></Col>
            </Row>
        </Container>
        
    )
}

export default React.memo(IncreaseNumberInput)