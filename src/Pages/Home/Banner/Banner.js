import React from 'react';
import './Banner.css'
import banner from './../../../images/banner.png'
const Banner = () => {
    return (
        <div className='banner '>
            <div className='container  d-md-flex align-items-center justify-content-between py-5 gap-2 mb-5'>

            <div className='w-100 text-light text-start p-3'>
            <h2>This Is <span className='text-warning'>MARK!</span></h2>
            <h2 className='mb-3'> Love to capture your happy <span className='text-warning'>MOMENT</span> with my new update camera.</h2>
            <a className='link p-2 rounded' href="#services"> HIRE ME!</a>
            </div>
            <div className='w-100 mt-5'>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            </div>

        </div>
    );
};

export default Banner;