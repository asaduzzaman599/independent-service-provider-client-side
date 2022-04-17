import React from 'react';
import { Col } from 'react-bootstrap';

const ChooseFeature = ({feature}) => {
    const {title,description,img} = feature
    return (
        <Col>
            <div className='w-100 text-center'>
                <img src={img} className="w-100 rounded" alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
        </Col>
    );
};

export default ChooseFeature;