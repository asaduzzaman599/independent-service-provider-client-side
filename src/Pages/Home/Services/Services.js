import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])

    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/asaduzzaman599/fakedata/main/servicesFakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div id='services' className='container mt-4 mb-4'>

            <h3 className='mb-3 mt-5 font-weight-bold text-secondary'>My Services</h3>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service=><Service key={service.id} service={service}>
                        <button className='rounded-pill px-3 w-50 mx-auto' onClick={() => navigate(`/service/${service.id}`)}>Get This</button>
                    </Service>)
                }
            </Row>
            
        </div>
    );
};

export default Services;