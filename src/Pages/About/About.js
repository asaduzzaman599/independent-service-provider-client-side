import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from './../../images/formal-image/IMG_2150.jpg'
const About = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col lg={8} className='mx-auto my-5'>
                    
                    <div  className='w-100  bg-light rounded-3  mx-auto shadow position-relative p-5'>
                        <div style={{ height: "150px", width: "100px" }} className='  mx-auto  position-absolute top-0 start-50 translate-middle'>
                            <img src={image} className="w-100 h-100 rounded-circle border border-2 shadow-lg" alt="" />
                        </div>
                        <div className='my-5 pt-4'>
                            <h3 className='mb-4'>Mohammad Asaduzzaman</h3>
                            <hr />
                            <h4 className='mb-3'>My Goals</h4>
                            <p>My main goal is Become a  gentle and good person and then Become a good and skillful web developer who can develop creative, user friendly and maintaining consistency in website. Introducing and update myself with new techonologies with research and practice. I want to be a great developer with my hard work.  </p>
                            <p>Thank You!</p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default About;