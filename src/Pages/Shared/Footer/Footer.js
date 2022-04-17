import React from 'react';

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className='p-3 mt-4 bg-dark text-light'>
            <p>Copyright &copy;{year}</p>
        </footer>
    );
};

export default Footer;