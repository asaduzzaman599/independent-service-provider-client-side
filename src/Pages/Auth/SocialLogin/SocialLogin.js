
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import './Sociallogin.css'
const SocialLogin = ({from='/'}) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    useEffect(()=>{
        if(user){
            navigate(from,{replace:true})
        }
        if(error){
            toast.error('Somthing went wrong!')
        }
    },[user,error])

    return (
        <div className='w-100 d-flex flex-column align-items-center social  mx-auto'>
            
        <p className='text-center text-secondary'>Using social networks</p>
           
            <Button variant='light rounded-circle border-1 ' onClick={()=>signInWithGoogle()}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" /></Button>

            <div className='or w-100 d-flex  align-items-center  justify-content-center my-3'>
                <div className='w-25 '> </div>
                <p className='mx-2'> OR </p>
                <div className='w-25  '> </div>
            </div>
        </div>
    );
};

export default SocialLogin;