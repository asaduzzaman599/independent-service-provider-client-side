import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/asaduzzaman599/fakedata/main/servicesFakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div id='services' className='container mt-5'>

            <h3 className='mb-3 mt-5 font-weight-bold text-secondary'>My Services</h3>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }
            </Row>
            
        </div>
    );
};

export default Services;