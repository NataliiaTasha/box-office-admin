import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles.css';
import DashboardPage from './components/DashboardPage';

const App = () => {
    return (
        <Router>
            <DashboardPage />
        </Router>
    );
};

export default App;
