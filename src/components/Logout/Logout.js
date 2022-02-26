import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './../Logout/Logout.css';

function Logout() {

    const [error, setError] = useState('');
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        setError('');

        try {
            await logout();
        } catch {
            console.log('failed to logout');
            return setError('Failed to log out');
        }

        navigate('/login');
    }

    return(
        <button id="logout-btn" onClick={handleLogout}>Logout</button>
    );
}

export default Logout;