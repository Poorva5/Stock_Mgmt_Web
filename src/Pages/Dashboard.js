import React from 'react';
import StockStatus from '../Components/Stock.js/Status';

const handleLogout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = '/'
}

const Dashboard = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px' }}>
                <h2>Today's Stock Data</h2>
                <h2 onClick={handleLogout} style={{ cursor: 'pointer', marginRight: '30px'}}>Logout</h2>
            </div>
            <StockStatus/>
        </div>
    )
}

export default Dashboard;