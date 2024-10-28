import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './User';


const DashboardPage = () => {
    return (
        <div className="DBContainer">
            <DashboardMenu />
            <Routes>
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    );
};

export default DashboardPage;