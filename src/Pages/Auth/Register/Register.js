import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    const [createUserWithEmailAndPassword, u, loading, hookError ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    

    //check user and error 
    useEffect(() => {
        if (user) {
            toast.success('User Created Successfully')
            navigate('/')
        }

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

    
    const handleForm = async (event) => {
        event.preventDefault()
        const { name, password, confirmPassword, email } = userInfo

        if (name && (/\S+@\S+\.\S+/).test(email) && (/.{6,}/).test(password) && confirmPassword === password) {
            
            //create user and update user info
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
        }
    }

    //loading
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <Form onSubmit={handleForm} className='form-container mx-auto shadow-lg p-4 m-4'>
                <h3>Register</h3>
                <SocialLogin></SocialLogin>

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

                {/* login toggle link */}
                <Link className='link m-2 d-block' to='/login'>Already have an account?</Link>
            </Form>
        </div>
    );
};

export default Register;