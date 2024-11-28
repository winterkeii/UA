import { useState } from 'react';
import {Navbar, Container, Nav, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function AppNavbar(){
  const [color, setColor] = useState('#AF984CFF'); 
  return(
      
        <Navbar style={{ backgroundColor: color, padding: '10px' }} expand="lg" className=" sticky-top shadow">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold'>UNIVERSITY AVENUE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              
              <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
              <i className="bi bi-search"></i>
            
          </Col>
         
        </Row>
      
        
      </Form>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
}