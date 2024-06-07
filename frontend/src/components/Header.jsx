import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Feed Me" />
            </div>
            <nav className="nav">
                <a href="/signup" className="btn">Sign Up</a>
                <a href="/login" className="btn">Login</a>
            </nav>
        </header>
    );
};

export default Header;

