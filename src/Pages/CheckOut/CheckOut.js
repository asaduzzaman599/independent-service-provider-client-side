import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ServiceContext } from '../../App';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service,setService] = useState(null)
    const navigate = useNavigate()
    
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/asaduzzaman599/fakedata/main/servicesFakeData.json')
        .then(res=> res.json())
        .then(data=>setService(data.find(service => service.id === +serviceId)))
    },[])
    
    const { name, description, price, img } = service || "";

    const handleForm = (event) =>{
        event.preventDefault();
        toast.success("Checkout succesfully completed")
        navigate('/')
        
    }


    return (
        <Container>
            <Row>
                <h4>CheckOut</h4>

                <Col md={6} className=''>
                    <div className=''>
                        <img src={img} className="img-fluid" alt="" />
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>Price : {price}</p>
                    </div>

                </Col>
                <Col md={6} className=''>

                    <Form  onSubmit={handleForm}  className=' text-right form p-5'>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill' type="text" placeholder="Your Name" /* onChange={'handleEmail'} */ required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="email" placeholder="Email" /* onChange={''} */ required />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="date"  /* onChange={''} */ required />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control as="textarea" className='rounded-pill ' type="text" placeholder="Desciptions" /* onChange={''} */ required />

                        </Form.Group>





                        <Button variant="primary" className='w-100 rounded-pill'  type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;