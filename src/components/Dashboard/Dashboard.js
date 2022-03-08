import React from 'react';
import './Dashboard.css';
import { useAuth } from './../../contexts/AuthContext';

//my components
import SideBar from './../SideBar/SideBar';
import ListView from '../ListView/ListView';

function Dashboard() {

    const { currentUser } = useAuth();

    return(
        <div className="dashboard-outer-container">
            <SideBar />
            <ListView />
        </div>
    );
}

export default Dashboard;