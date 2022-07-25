import React from 'react'
import { useAuth } from './Context/AuthContext'
import {Navigate, useLocation} from "react-router-dom";

const RequiresAuth = ({children}) => {
    const {isLoggedIn} = useAuth();
    const location = useLocation();

    return isLoggedIn ? children  : <Navigate to="/login" state={{from:location}} replace/>;0
}

export default RequiresAuth;