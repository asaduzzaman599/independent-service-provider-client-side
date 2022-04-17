import React, {  useEffect, useState } from 'react';
import {  Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Service from '../Home/Service/Service';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState(null)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/asaduzzaman599/fakedata/main/servicesFakeData.json')
            .then(res => res.json())
            .then(data => setService(data.find(service => service.id === +serviceId)))
    }, [])


    const handleForm = (event) => {
        event.preventDefault();
        toast.success("thank you for the booking.F")
        navigate('/')

    }


    return (
        <Container>
            <Row>
                <h3 className='my-3 text-secondary'>CheckOut</h3>

                <Col md={6} className=''>

                    {
                        service && <Service service={service}></Service>
                    }

                </Col>
                <Col md={6} className=''>

                    <Form onSubmit={handleForm} className=' text-right form p-5'>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={user.displayName} className='rounded-pill' type="text" placeholder="Your Name" readOnly required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="email" value={user.email} placeholder="Email" readOnly required />
                        </Form.Group>


                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="text" placeholder="Phone No." required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="date" required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="text" placeholder="Address" required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control as="textarea" className='rounded-pill ' style={{ resize: 'none' }} type="text" placeholder="Desciptions" />

                        </Form.Group>





                        <button className='w-100 rounded-pill' type="submit">
                            Submit
                        </button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;