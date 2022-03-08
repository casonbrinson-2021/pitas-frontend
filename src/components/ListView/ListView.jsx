import React from 'react';
import './ListView.css';
import ListItem from './ListItem/ListItem';

const ListView = () => {

    return(
        <div className="list-view-outer-container">
            <div className="list-view-container">

                <div className="header-container">
                    <h1 className="list-title">ISSUES</h1>
                    <div className="column-btn-container">
                        <button className="project-column-btn column-btn"><h3>Project</h3></button>
                        <button className="status-column-btn column-btn"><h3>Status</h3></button>
                        <button className="date-column-btn column-btn"><h3>Date Created</h3></button>
                    </div>
                </div>

                {/* need to make this a scrollable container */}
                <div className="list-items-container-all">
                    <ListItem />
                </div> 
            </div>
        </div>
    );
}

export default ListView;