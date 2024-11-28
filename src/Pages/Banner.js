import {Button, Col, Container, NavLink, Row } from 'react-bootstrap';


export default function Banner(){
    return(
        <Container fluid>
            <Row>
            <Col className='p-5 d-flex flex-column align-items-left justify-content-center vh-100'>
                <h1 className='display-3 fw-bold mb-3'>Your one stop</h1>
                <p className='display-6 mb-5' >shop for school ready uniforms</p>
                <NavLink className='rounded-pill py-3 px-5 shadow col-sm-2 col-md-2 col-lg-2 fw-bold text-center'>Shop Now</NavLink>
                <i class="bi bi-search"></i>
                
            </Col>
           
            
            
        </Row>
        </Container>
    )
}