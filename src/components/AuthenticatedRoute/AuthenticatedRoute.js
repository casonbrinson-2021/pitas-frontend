import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function AuthenticatedRoute() {

    const { currentUser } = useAuth();
    const location = useLocation();

     return( 
         currentUser ? <Outlet /> : <Navigate to="/login"/>
     );
}

export default AuthenticatedRoute;