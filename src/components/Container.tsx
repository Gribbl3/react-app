import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Container() {
  return (
    < >
        <Row>
            <Col className='bg-info'>1 of 1</Col>
            <Col className='bg-danger'>1 of 2</Col>
            <Col className='bg-warning'>1 of 3</Col>
        </Row>
    </>
  )
}

export default Container;