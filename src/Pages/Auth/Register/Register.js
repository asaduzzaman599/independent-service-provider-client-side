import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './../FormStyle/Form.css'
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        u,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    useEffect(() => {
        if (user) {
            navigate('/')
        }

        if (hookError) {
            console.log(hookError.message)
            switch(hookError.message) {
                case 'Firebase: Error (auth/invalid-email).' :
                    toast.error('Invalid email.')
            
                  break;
                case 'Firebase: Error (auth/email-already-in-use).':
                  
                    toast.error('User already exist.')
                  break;
                default:
                    toast.error('Something went wrong!')
              }
        }
    }, [user, hookError])

    const [userInfo, setUserInfo] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    })

    const [error, setError] = useState({
        nameError: '', emailError: '', passwordError: '', confirmPasswordError: ''
    })

    const handleUsername = (event) => {
        const username = event.target.value;
        if (username) {
            setUserInfo({ ...userInfo, name: username })
            setError({ ...error, nameError: '' })
        } else {
            setError({ ...error, nameError: 'please enter your name' })
        }
    }

    const handleEmail = (event) => {
        const email = event.target.value;
        if ((/\S+@\S+\.\S+/).test(email)) {
            setUserInfo({ ...userInfo, email: email })
            setError({ ...error, emailError: '' })
        } else {
            setError({ ...error, emailError: 'Invalid Email' })
        }
    }


    const handlePassword = (event) => {
        const password = event.target.value;
        if ((/.{6,}/).test(password)) {
            setUserInfo({ ...userInfo, password: password })
            setError({ ...error, passwordError: '' })
        } else {

            setError({ ...error, passwordError: 'Minimum password length 6' })
        }
    }



    const handleConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        if (confirmPassword === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: confirmPassword })
            setError({ ...error, confirmPasswordError: '' })
        } else {
            setError({ ...error, confirmPasswordError: 'Not matched' })
        }
    }


    const handleForm = (event) => {
        event.preventDefault()
        const { name, password, confirmPassword, email } = userInfo

        console.log(name, password, confirmPassword, email)
        if (name && (/\S+@\S+\.\S+/).test(email) && (/.{6,}/).test(password) && confirmPassword === password) {
            console.log(name, password, confirmPassword, email)
            createUserWithEmailAndPassword(email, password)
        }
    }


    if(loading){
        return <Loading></Loading>
     }
    return (
        <div className=''>
            <Form onSubmit={handleForm} className='form-container mx-auto shadow-lg p-4 m-4'>
                <h3>Register</h3>
                <SocialLogin></SocialLogin>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="text" placeholder="Username" onChange={handleUsername} required />
                    {error.nameError && <p className='text-danger'>{error.nameError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="email" placeholder="Enter email" onChange={handleEmail} required />
                    {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-pill' type="password" placeholder="Password" onChange={handlePassword} required />
                    {error.passwordError && <p className='text-danger'>{error.passwordError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-pill' type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} required />
                    {error.confirmPasswordError && <p className='text-danger'>{error.confirmPasswordError}</p>}
                </Form.Group>


                <button  className='w-100 rounded-pill' type="submit">
                    Register
                </button>
            <Link className='link m-2 d-block' to='/login'>Already have an account?</Link>
            </Form>
        </div>
    );
};

export default Register;