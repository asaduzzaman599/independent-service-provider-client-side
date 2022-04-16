import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './../FormStyle/Form.css'
const Register = () => {

    const [userInfo,setUserInfo] = useState({
        name:'',email:'',password:'',confirmPassword:''
    })

    const [error,setError]=useState({
        nameError:'',emailError:'',passwordError:'',confirmPasswordError:''
    })

    const handleUsername = (event)=>{
        const username = event.target.value;
        if(username){
            setUserInfo({...userInfo,name:username})
            setError({...error,nameError:''})
        }else{
            setError({...error,nameError:'please enter your name'})
        }
    }

    const handleEmail = (event)=>{
        const email = event.target.value;
        if((/\S+@\S+\.\S+/).test(email)){
            setUserInfo({...userInfo,email:email})
            setError({...error,emailError:''})
        }else{
            setError({...error,emailError:'Invalid Email'})
        }
    }

    
    const handlePassword = (event)=>{
        const password = event.target.value;
        if((/.{6,}/).test(password)){
            setUserInfo({...userInfo,password:password})
            setError({...error,passwordError:''})
        }else{
           
            setError({...error,passwordError:'Minimum password length 6'})
        }
    }

    
    
    const handleConfirmPassword = (event)=>{
        const confirmPassword = event.target.value;
        if(confirmPassword === userInfo.password){
            setUserInfo({...userInfo,confirmPassword:confirmPassword})
            setError({...error,confirmPasswordError:''})
        }else{
            setError({...error,confirmPasswordError:'Not matched'})
        }
    }


    const handleForm = (event) =>{
        event.preventDefault()
        const {name,password,confirmPassword,email} = userInfo
        

        if(name && !(/\S+@\S+\.\S+/).test(email) &&(/.{6,}/).test(password) &&confirmPassword ===password){
            console.log()
        }
    }
    


    return (
        <div className=''>
            <Form onSubmit={handleForm} className='form-container mx-auto shadow-lg p-4 '>
            <h3>Registered</h3>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="text" placeholder="Username" onChange={handleUsername} required/>
                    { error.nameError && <p className='text-danger'>{error.nameError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="email" placeholder="Enter email" onChange={handleEmail} required/>
                    { error.emailError && <p className='text-danger'>{error.emailError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-pill' type="password" placeholder="Password" onChange={handlePassword} required/>
                    { error.passwordError && <p className='text-danger'>{error.passwordError}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-pill' type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} required/>
                    { error.confirmPasswordError && <p className='text-danger'>{error.confirmPasswordError}</p>}
                </Form.Group>


                <Button variant="primary" className='w-100' type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;