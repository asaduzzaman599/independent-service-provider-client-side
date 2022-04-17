
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, name, descriptions, price, img, eventtype } = service;
    return (
        <Col>
            <Card className='service h-100 '>
                <Card.Img variant="top" src={img} />
                <Card.Body className='d-flex flex-column  justify-content-between'>

                    <h4>
                        ${price}
                    </h4>
                    <p>{eventtype}</p>
                    <h3>{name}</h3>
                    <div>
                        
                    {
                        descriptions.map((description, index) => <p /* description={description} key={index} */>{description}
                        </p>)
                    }
                    </div>
                    <button className='rounded-pill px-3 w-50 mx-auto' onClick={() => navigate(`/service/${id}`)}>Get This</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;