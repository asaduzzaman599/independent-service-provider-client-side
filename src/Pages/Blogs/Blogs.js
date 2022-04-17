import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className=' text-start'>
            <div className='w-75 mx-auto shadow p-5 my-3 bg-light'>
                <h5>Difference between authorization and authentication</h5>
                <li>When some one identified we can call them authenticated but some time athenticated person normally no abality to access something and To access those that person have to be authorized.
                </li>
                <li>Every Authorized person is authenticated but all authenticated person not authorised.</li>
                <li>Every Authorized person is authenticated but all authenticated person not authorised.</li>
                <li>Every Authorized  has more power to access then authenticated but all authenticated has less power then authorised.</li>
                <li>Authentication happend before authorization but  authorization happend after authentication.</li>
            </div>

            <div className='w-75 mx-auto shadow p-5 my-3 bg-light'>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase provide third party  authentication . They are scecure to store email and password safely. They store password as chiper text after encryption. Google continuously working with data safety so for third party authentication solution provider we can use firebase.  </p>
                <p>And there are some other option who also provide  Authentication </p>
                <li>Okta</li>
                <li>OneLogin</li>
                <li>Microsoft Azure Active Directory</li>
                <li>Auth0</li>
                <li>SecureAuth Identity Platform</li>
                <li>CyberArk Identity</li>

            </div>

            <div className='w-75 mx-auto shadow p-5 my-3 bg-light'>
                <h5>What other services does firebase provide other than authentication</h5>
                <Row  xs={4} className="g-4">
                    <Col><li>Cloud Firestore</li></Col>
                    <Col><li>Machine Learning</li></Col>
                    <Col><li>Cloud Functions</li></Col>
                    <Col><li>Authentication</li></Col>
                    <Col><li>Hosting</li></Col>
                    <Col><li>Cloud Storage</li></Col>
                    <Col><li>Realtime Database</li></Col>
                    <Col><li>Crashlytics</li></Col>
                    <Col><li>Performance Monitoring</li></Col>
                    <Col><li>Test Lab</li></Col>
                    <Col><li>App Distribution</li></Col>
                    <Col><li>Google Analytics</li></Col>
                    <Col><li>In-App Messaging</li></Col>
                    <Col><li>A/B Testing</li></Col>
                    <Col><li>Cloud Messaging</li></Col>
                    <Col><li>Remote Config</li></Col>
                    <Col><li>Dynamic Links</li></Col>
                </Row>
            </div>
        </div>
    );
};

export default Blogs;