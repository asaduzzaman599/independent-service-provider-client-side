import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {

    //firebase hooks
    const [user, loading] = useAuthState(auth)
    const location = useLocation();


    //loading 
    if (loading) {
        return <Loading></Loading>
    }


    //if user not loggedin then return login page with destination 
    if (!user) {
        toast('Please login first!')
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    //if user looged in then return destination page 
    return (
        children
    );
};

export default RequiredAuth;