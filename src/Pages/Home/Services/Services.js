import React, { useContext, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { ServiceContext } from '../../../App';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useContext(ServiceContext)

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div id='services' className='container'>

            <h2>Services</h2>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }
            </Row>
            
        </div>
    );
};

export default Services;