import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function NotAuthenticatedRoute() {

    const { currentUser } = useAuth();
    const location = useLocation();

     return( 
         !currentUser ? <Outlet /> : <Navigate to="/dashboard"/>
     );
}

export default NotAuthenticatedRoute;