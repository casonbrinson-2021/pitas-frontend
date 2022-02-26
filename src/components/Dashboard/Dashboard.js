import React from 'react';
import './Dashboard.css';
import { useAuth } from './../../contexts/AuthContext';

//my components
import Logout from './../Logout/Logout';

function Dashboard() {

    const {currentUser, logout } = useAuth();

    return(
        <div>
            <h1>{currentUser.email}</h1>
            <Logout />
        </div>
    );
}

export default Dashboard;