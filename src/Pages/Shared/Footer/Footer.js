import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css'


const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className='p-3 mt-4 bg-dark text-light'>
           <Container>
           <Row    className='text-lg-start'>
                <Col lg={8}>
                    <Link to='./'  className='text-secondary text-decoration-none  mb-2 fs-3'><span className="fs-3 fw-bold" style={{ color: "#2fb694" }}> M</span>'s Capture
                    </Link>
                </Col>
                <Col lg={2} className="footer-info">
                    <h3>Services</h3>
                    <p>Regualer event</p>
                    <p>Wedding Premium</p>
                    <p>Wedding Duplex</p>
                </Col>
                <Col lg={2} className="footer-info">
                    
                <h3>Contact</h3>
                    <h4>office</h4>
                    <p>Dhaka, Cantonment, Dhaka - 1206</p>
                    
                </Col>
            </Row>
           </Container>
            <p>Copyright &copy;{year}</p>
        </footer>
    );
};

export default Footer;