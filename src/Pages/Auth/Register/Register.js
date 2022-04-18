import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './../FormStyle/Form.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const navigate = useNavigate()


    //firebase hooks
    const [user] = useAuthState(auth)
    const [createUserWithEmailAndPassword, u, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile,updating] = useUpdateProfile(auth);


    //check user and error 
    useEffect(() => {
        if (user) {
            toast.success('User Created Successfully')
            navigate('/')
        }

        //display error 
        if (hookError) {
            switch (hookError.message) {
                case 'Firebase: Error (auth/invalid-email).':
                    toast.error('Invalid email.')
                    break;

                case 'Firebase: Error (auth/email-already-in-use).':

                    toast.error('User already exist.')
                    break;
                default:
                    toast.error('Something went wrong!')
                    break;
            }
        }
    }, [user, hookError,updating])


    //userinfo and error
    const [userInfo, setUserInfo] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    })

    const [error, setError] = useState({
        nameError: '', emailError: '', passwordError: '', confirmPasswordError: ''
    })

    const handleUsername = (event) => {
        const username = event.target.value;
        setUserInfo({ ...userInfo, name: username })
        setError({ ...error, nameError: '' })

    }

    const handleEmail = (event) => {
        const email = event.target.value;
        setUserInfo({ ...userInfo, email: email })
        setError({ ...error, emailError: '' })
    }


    const handlePassword = (event) => {
        const password = event.target.value;
        setUserInfo({ ...userInfo, password: password })
        setError({ ...error, passwordError: '' })
    }



    const handleConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        setUserInfo({ ...userInfo, confirmPassword: confirmPassword })
        setError({ ...error, confirmPasswordError: '' })
    }


    const handleForm = async (event) => {
        event.preventDefault()
        const { name, email, password, confirmPassword } = userInfo
        if (!name) {
            setError({ ...error, nameError: 'please enter your name' })
        }
        if (!(/\S+@\S+\.\S+/).test(email)) {
            setError({ ...error, emailError: 'Invalid Email' })
        }
        if (!(/.{6,}/).test(password)) {
            setError({ ...error, passwordError: 'Minimum password length 6' })
        }
        if (!(confirmPassword === password)) {
            setError({ ...error, confirmPasswordError: 'Not matched' })
        }
        if (name && (/\S+@\S+\.\S+/).test(email) && (/.{6,}/).test(password) && confirmPassword === password) {

            //create user and update user info
            await createUserWithEmailAndPassword(email, password)
            updateProfile({ displayName: name })
        }
    }

    //loading
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <Container className='form-container'>
            <Row>

                <Col lg={6} md={10} className='bg-white my-4 p-4 mx-auto shadow-lg'>
                    <h3>Register</h3>
                    <SocialLogin></SocialLogin>
                    <Form onSubmit={handleForm} className=' text-right form'>

                        {/* username input and if empty then displayed error */}
                        <Form.Group className="mb-3 " controlId="formBasicName">
                            <Form.Control className='rounded-pill' type="text" placeholder="Username" onChange={handleUsername} required />
                            {error.nameError && <p className='text-danger'>{error.nameError}</p>}
                        </Form.Group>

                        {/* email input and if error then displayed error */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='rounded-pill' type="email" placeholder="Enter email" onChange={handleEmail} required />
                            {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                        </Form.Group>

                        {/* password input and if error then displayed error */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='rounded-pill' type="password" placeholder="Password" onChange={handlePassword} required />
                            {error.passwordError && <p className='text-danger'>{error.passwordError}</p>}
                        </Form.Group>

                        {/* confirm pass and if error then displayed error */}
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control className='rounded-pill' type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} required />
                            {error.confirmPasswordError && <p className='text-danger'>{error.confirmPasswordError}</p>}
                        </Form.Group>


                        {/* register button */}
                        <button className='w-100 rounded-pill' type="submit">
                            Register
                        </button>


                    </Form>
                    {/* login toggle link */}
                    <Link className='link m-2 d-block' to='/login'>Already have an account?</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;