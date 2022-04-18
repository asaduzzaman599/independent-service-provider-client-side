import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChooseFeature from '../ChooseFeature/ChooseFeature';

const Choose = () => {
    const features = [
        { id: 1, title: "Quality Assurance", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", description: "Best quality of picture capture with updated techonologies device. No compromise with quality of photos" },
        { id: 2, title: "Trusted", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", description: "Give my best output to my customers. Always full filled customers setisfaction." },
        { id: 3, title: "Experienced", img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV4cGVyaWVuY2V8ZW58MHx8MHx8&w=1000&q=80", description: "Working more then 4 year with 100+ event myself and it's increasing continuously. Which motivated me and proved my skills." }
    ]
    return (
        <Container className='mt-4'>
            <h2 className='mb-3 text-secondary'>Why you will choose me?</h2>
            <Row xs={1} md={2} lg={3} className="g-4" >
                {
                    features.map(feature => <ChooseFeature feature={feature} key={feature.id}></ChooseFeature>)
                }
            </Row>
        </Container>
    );
};

export default Choose;