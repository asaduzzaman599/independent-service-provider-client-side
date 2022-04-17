
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, name, description, price, img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price : ${price}
                    </Card.Text>
                    <Button variant='primary' onClick={()=>navigate(`/service/${id}`)}>Get This</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;