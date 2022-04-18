import React from 'react';
import { Col } from 'react-bootstrap';

const ChooseFeature = ({ feature }) => {
    const { title, description, img } = feature
    return (
        <Col>
            <div className='w-100  text-center'>
                <img src={img} className="w-100 rounded" alt="" />
                <div className='p-3'>
                    <h3 className='mt-3 text-success'>{title}</h3>
                    <p className='text-secondary'>{description}</p>
                </div>
            </div>

        </Col>
    );
};

export default ChooseFeature;