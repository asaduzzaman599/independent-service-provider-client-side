import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Services></Services> 
           <hr />
           <Choose></Choose>
        </>
    );
};

export default Home;