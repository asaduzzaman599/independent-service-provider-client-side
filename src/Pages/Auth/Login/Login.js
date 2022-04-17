import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Login = () => {
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword, user, loading, hookError ] = useSignInWithEmailAndPassword(auth);
        const [sendPasswordResetEmail, sending, resetEmailError] = useSendPasswordResetEmail(auth);

    const [userInfo,setUserInfo] = useState({
       email:'',password:''
    })
    const [error,setError]= useState({emailError:''})


   
    useEffect(() => {
        if (user) {
            navigate('/')
        }

        if (hookError) {
            console.log(hookError.message)
        }
    }, [user, hookError])
    

    
    

    const handleEmail = (event)=>{
        const email = event.target.value;
        
            setUserInfo({...userInfo,email:email})
            setError({emailError:""})
            
        
            
    }

    
    const handlePassword = (event)=>{
        const password = event.target.value;
        
            setUserInfo({...userInfo,password:password})
            
    }

    
    
   


    const handleForm = (event) =>{
        event.preventDefault()
        const {password,email} = userInfo
        
        signInWithEmailAndPassword(email,password)
        
    }
    

    const handleForgetPassword = ()=>{
        const email = userInfo.email;
        if(email){
            sendPasswordResetEmail(email)
        }else{
            setError({emailError:"Please enter your email"})
        }
    }

    return (
        <div className=''>
            <Form onSubmit={handleForm} className='form-container mx-auto shadow-lg p-4 '>
            <h3 className='my-4'>Login to Yor Account</h3>
            

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="email"  placeholder="Enter email" onChange={handleEmail} required/>
                    {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-pill' type="password" placeholder="Password" onChange={handlePassword} required/>
                   
                </Form.Group>


                <Button className='' onClick={handleForgetPassword} variant='link'>Forget password?</Button>
                


                <Button variant="primary" className='w-100 rounded-pill' type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;