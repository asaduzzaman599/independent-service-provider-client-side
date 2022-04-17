
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service, children }) => {
   
    //distructuring props

    const { name, descriptions, price, img, eventtype } = service;

    return (
        <Col>
            <Card className='service h-100 '>
                <Card.Img variant="top" src={img} />
                <Card.Body className='d-flex flex-column  justify-content-between'>

                    <div>
                        
                        <div className='mb-2'>
                        <h3 className='text-warning fs-2 m-0 p-0'>
                            ${price}
                        </h3>
                        <p className='fs-5 text-secondary fw-bold '>{eventtype}</p>
                        <h3 className='m-0'>{name}</h3>
                        </div>

                        {
                            descriptions.map((description, index) => <p key={index} >{description}
                            </p>)
                        }
                    </div>
                    {/* display children pass by parent compnont */}
                    {
                        children
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;