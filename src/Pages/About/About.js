import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from './../../images/formal-image/IMG_2150.jpg'
const About = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col lg={8} className='mx-auto my-5'>
                    <h3>About</h3>
                    <div  className='w-100  bg-light rounded-3  mx-auto shadow position-relative p-5'>
                        <div style={{ height: "150px", width: "100px" }} className='  mx-auto  position-absolute top-0 start-50 translate-middle'>
                            <img src={image} className="w-100 h-100 rounded-circle border border-2 shadow-lg" alt="" />
                        </div>
                        <div className='my-5 pt-4'>
                            <h3 className='mb-4'>Mohammad Asaduzzaman</h3>
                            <h4 className='mb-3'>My Goals</h4>
                            <p>Be a gentle and good person. Become a good and skill full web developer. Introducing and update myself with new techonologies. I want to saw my self as a great developer with my hard work.  </p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default About;