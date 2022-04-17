import React from 'react';
import './Footer.css'
const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className='p-3 footer text-light'>
            <p>Copyright &copy;{year}</p>
        </footer>
    );
};

export default Footer;