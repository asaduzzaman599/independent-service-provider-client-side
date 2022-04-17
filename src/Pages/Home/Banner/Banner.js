import React from 'react';
import './Banner.css'
import banner from './../../../images/banner.png'
const Banner = () => {
    return (
        <div className='banner '>
            <div className='container  d-md-flex align-items-center justify-content-between py-5 gap-2 mb-5'>

            <div className='w-100 text-light'>
            <h2>This Is Curson hire me to Capturing your best moments. </h2>
            </div>
            <div className='w-100'>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            </div>

        </div>
    );
};

export default Banner;