import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [
        signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetEmailError] = useSendPasswordResetEmail(auth);

    const [userInfo, setUserInfo] = useState({
        email: '', password: ''
    })
    const [error, setError] = useState({ emailError: '' })


    let from = location?.state?.from?.pathname || '/';
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }

        if (hookError) {
            switch (hookError.message) {
                case 'Firebase: Error (auth/wrong-password).':
                    toast.error('Wrong Password.')

                    break;
                case 'Firebase: Error (auth/user-not-found).':

                    toast.error('Invalid user.')
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


    const handleForgetPassword = () => {
        const email = userInfo.email;
        if (email) {
            sendPasswordResetEmail(email)
        } else {
            setError({ emailError: "Please enter your email" })
        }
    }

    if(loading){
        return <Loading></Loading>
    }


    return (
        <div className='form-container mx-auto m-4  p-4 shadow-lg '>
            <h3 className=''>Login to Yor Account</h3>
            <SocialLogin from={from}></SocialLogin>
            <Form onSubmit={handleForm} className=' text-right form'>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="email" placeholder="Enter email" onChange={handleEmail} required />
                    {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                </Form.Group>

                <Form.Group className="mb-1 " controlId="formBasicPassword">
                    <Form.Control className='rounded-pill ' type="password" placeholder="Password" onChange={handlePassword} required />

                </Form.Group>


                <button className='p-1 d-inline-block m-2 text-decoration-none link' onClick={handleForgetPassword} >Forget password?</button>



                <button  className='w-100 rounded-pill' type="submit">
                    Login
                </button>
            </Form>
            <Link className='link m-2 d-block' to='/register'>Don't have account?</Link>
        </div>
    );
};

export default Login;