import React from 'react';
import logo from '../assets/images/eh-logo.png';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Exhibition Hub logo" />
            <h1>Box Office</h1>
            
        </header>
    );
}

export default Header;