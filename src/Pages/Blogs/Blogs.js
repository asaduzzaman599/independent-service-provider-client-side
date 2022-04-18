import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className=' text-start'>
            <div className='w-75 mx-auto shadow p-5 my-3 bg-light'>
                <h5>Difference between authorization and authentication</h5>
                <li>When some one identified we can call them authenticated but some time athenticated person normally no abality to access something and To access those that person have to be authorized.
                </li>
                <li>Every Authorized person is authenticated but all authenticated person not authorised.</li>
                <li>Every Authorized  has more power to access then authenticated but all authenticated has less power then authorised.</li>
                <li>Authentication happend before authorization but  authorization happend after authentication.</li>
            </div>

            <div className='w-75 mx-auto shadow p-5 my-3 bg-light'>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase provide third party  authentication. They are scecure to store users email and password safely. They store password as chiper text after encryption. Google continuously working with data safety so for third party authentication solution provider we can use firebase.  </p>
                <p>There are some other option who also provide  Authentication </p>
                <li>Okta</li>
                <li>OneLogin</li>
                <li>Microsoft Azure Active Directory</li>
                <li>Auth0</li>
                <li>SecureAuth Identity Platform</li>
                <li>CyberArk Identity</li>

            </div>

            <div className='w-75 mx-auto shadow p-5 my-3 bg-light'>
                <h5>What other services does firebase provide other than authentication</h5>
                <Row   className="g-4">
                    <Col md={4}><li>Cloud Firestore</li></Col>
                    <Col md={4}><li>Machine Learning</li></Col>
                    <Col md={4}><li>Cloud Functions</li></Col>
                    <Col md={4}><li>Hosting</li></Col>
                    <Col md={4}><li>Cloud Storage</li></Col>
                    <Col md={4}><li>Realtime Database</li></Col>
                    <Col md={4}><li>Crashlytics</li></Col>
                    <Col md={4}><li>Performance Monitoring</li></Col>
                    <Col md={4}><li>Test Lab</li></Col>
                    <Col md={4}><li>App Distribution</li></Col>
                    <Col md={4}><li>Google Analytics</li></Col>
                    <Col md={4}><li>In-App Messaging</li></Col>
                    <Col md={4}><li>A/B Testing</li></Col>
                    <Col md={4}><li>Cloud Messaging</li></Col>
                    <Col md={4}><li>Remote Config</li></Col>
                    <Col md={4}><li>Dynamic Links</li></Col>
                </Row>
            </div>
        </Container>
    );
};

export default Blogs;