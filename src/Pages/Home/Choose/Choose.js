import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChooseFeature from '../ChooseFeature/ChooseFeature';

const Choose = () => {
    const features = [
        { id: 1, title: "quality Assurance", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", description: "Best quality of picture capture with update techno" },
        { id: 2, title: "Trusted", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", description: "Always try to give best out put to my customer. no Compomise about quality. Always update my tools and also my self" },
        { id: 3, title: "Experience", img: "https://images.unsplash.com/photo-1629721671030-a83edbb11211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", description: "Working more then 4 year and complete more then 100+ event myself and it's increasing continuousely. Which are motivated me and prove my skills." }
    ]
    return (
        <Container className='mt-4'>
            <h2 className='mb-3'>Why we will choose ME?</h2>
            <Row xs={1} md={2} lg={3} className="g-4" >
                {
                    features.map(feature => <ChooseFeature feature={feature} key={feature.id}></ChooseFeature>)
                }
            </Row>
        </Container>
    );
};

export default Choose;