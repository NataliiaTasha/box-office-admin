import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import '../assets/css/Dashboard.css';
import ExhibitionForm from './ExhibitionForm';

const Dashboard = () => {
    return (
        <div className="DBContainer">
            <Header />
            <ExhibitionForm />        
        </div>
    );
};

export default Dashboard;