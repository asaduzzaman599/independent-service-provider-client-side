import React from 'react';
import './Banner.css'
import banner from './../../../images/banner.png'
const Banner = () => {
    return (
        <div className='banner '>
            <div className='container  d-md-flex align-items-center justify-content-between py-3 py-md-5 gap-2 mb-md-5 mb-3'>

            <div className='w-100 text-light text-start p-3'>
            <h2>This is <span className='text-warning'>MARK!</span></h2>
            <h3>Professional Wedding Photographer</h3>
            <p className='mb-3'> Love to capture your happy <span className='text-warning'>MOMENT</span> with my new updated camera.</p>
            <a className='link p-2 rounded hire-me' href="#services"> HIRE ME!</a>
            </div>
            <div className='w-100 mt-3'>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            </div>

        </div>
    );
};

export default Banner;