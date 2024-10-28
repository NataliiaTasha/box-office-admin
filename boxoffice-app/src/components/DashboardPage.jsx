import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import User from './User';
import DashboardMenu from './DashboardMenu';
import ExhibitionForm from './ExhibitionForm';


const DashboardPage = () => {
    return (
        <div className="DBContainer">
            <DashboardMenu />
            <Routes>
                {/* <Route path="/user" element={<User />} /> */}
                <Route path="/exhibitionForm" element={<ExhibitionForm />} />
            </Routes>
        </div>
    );
};

export default DashboardPage;