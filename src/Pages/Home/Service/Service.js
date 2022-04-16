
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
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
                    <Button variant='primary'>Get This</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;