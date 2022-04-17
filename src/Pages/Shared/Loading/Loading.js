import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='mb-5 pb-5'> 
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;