import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [userInfo,setUserInfo] = useState({
        name:'',email:'',password:'',confirmPassword:''
    })

   
    

    
    

    const handleEmail = (event)=>{
        const email = event.target.value;
        
            setUserInfo({...userInfo,email:email})
            
        
            
    }

    
    const handlePassword = (event)=>{
        const password = event.target.value;
        
            setUserInfo({...userInfo,password:password})
            
    }

    
    
   


    const handleForm = (event) =>{
        event.preventDefault()
        const {password,confirmPassword,email} = userInfo
        

        
    }
    


    return (
        <div className=''>
            <Form onSubmit={handleForm} className='form-container mx-auto shadow-lg p-4 '>
            <h3>Login</h3>
            

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill' type="email" placeholder="Enter email" onChange={handleEmail} required/>
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-pill' type="password" placeholder="Password" onChange={handlePassword} required/>
                   
                </Form.Group>

                


                <Button variant="primary" className='w-100 rounded-pill' type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;