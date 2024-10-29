import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Імпорт useNavigate для перенаправлення
import Header from './Header';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import "../assets/css/HomePage.css";

const HomePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize the navigation device

    const handleLogin = (userData) => {
        setUser(userData); // store user data
        navigate('/dashboard'); // Redirecting to the Dashboard
    };

    return (
        <div className='DBContainer'>
            <Header />
            {!user ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <div>
                    <h2>Welcome, {user.username}!</h2>
                    <Dashboard />
                </div>
            )}
        </div>
    );
};

export default HomePage;