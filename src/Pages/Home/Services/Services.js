import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../../../App';

const Services = () => {
    const [services,setServices] = useContext(ServiceContext)

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div>

            <h2>Services</h2>
            
        </div>
    );
};

export default Services;