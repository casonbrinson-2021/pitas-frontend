import React, { useState } from 'react';
import './SideBar.css';
import { useAuth } from './../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

    const { currentUser, logout } = useAuth();

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        setError('');
        try {
            await logout();
        } catch {
            console.log('Failed to logout');
            return setError('Failed to log out');
        }
        navigate('/login');
    }

    return(
        <div className="sidebar-container">
            
            <div className="profile-img-container">

            </div>

            <div className="side-btns">
                <div className="side-btn-container">
                    <div className="side-btn"></div>
                </div>
                <div className="side-btn-container">
                    <div className="side-btn"></div>
                </div>
                <div className="new-task-btn">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" width="6" height="30" rx="2" fill="white"/>
                        <rect y="18" width="6" height="30" rx="2" transform="rotate(-90 0 18)" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="logout-container">
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default SideBar;