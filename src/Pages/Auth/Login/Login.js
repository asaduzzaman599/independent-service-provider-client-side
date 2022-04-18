import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {


    const navigate = useNavigate()
    const location = useLocation()

    //firebase hooks
    const [signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetEmailError] = useSendPasswordResetEmail(auth);

    //state for userinfo and validation
    const [userInfo, setUserInfo] = useState({
        email: '', password: ''
    })
    const [error, setError] = useState({ emailError: '' })


    //set the destination location
    let from = location?.state?.from?.pathname || '/';

    //check user and errors
    useEffect(() => {
        if (user) {
            //if user found then navigate the destination page
            navigate(from, { replace: true })
        }

        if (hookError) {
            switch (hookError.message) {
                case 'Firebase: Error (auth/wrong-password).':
                    toast.error('Wrong email or password.')

                    break;
                case 'Firebase: Error (auth/user-not-found).':

                    toast.error('No user found.')
                    break;
                default:
                    toast.error('Something went wrong!')
            }
        }
    }, [user, hookError])





    const handleEmail = (event) => {
        const email = event.target.value;

        setUserInfo({ ...userInfo, email: email })
        setError({ emailError: "" })

    }


    const handlePassword = (event) => {
        const password = event.target.value;
        setUserInfo({ ...userInfo, password: password })

    }






    const handleForm = (event) => {
        event.preventDefault()
        const { password, email } = userInfo
        signInWithEmailAndPassword(email, password)

    }

    //forget password sent email
    const handleForgetPassword = async () => {
        const email = userInfo.email;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Reset password mail sent.')
        } else {
            setError({ emailError: "Please enter your email" })
        }
    }

    //showing loading
    /* if (loading) {
        return <Loading></Loading>
    } */


    return (
        <Container className='form-container'>
            <Row>
                <Col lg={6} md={10} className='bg-white my-4  p-4 mx-auto  shadow-lg '>
                    <h3 className=''>Login to Your Account</h3>
                    <SocialLogin from={from}></SocialLogin>
                    <Form onSubmit={handleForm} className=' text-right form'>

                        {/* email input */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill' type="email" placeholder="Enter email" onChange={handleEmail} required />
                            {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                        </Form.Group>

                    
                        {/* password input */}
                            <Form.Group className="mb-1 " controlId="formBasicPassword">
                            <Form.Control className='rounded-pill ' type="password" placeholder="Password" onChange={handlePassword} required />
                        </Form.Group>


                        {/*  forget password */}
                        <button className='p-1 d-inline-block m-2  link' type="button" onClick={handleForgetPassword} >Forget password?</button>



                        {/* login button */}
                        <button className='w-100 rounded-pill' type="submit">
                            Login
                        </button>
                    </Form>

                    
                        {/* register toggle link */}
                    <Link className='link m-2 d-block' to='/register'>Don't have account?</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;