import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Feed Me" />
                </div>
                <div className="social-media">
                    <FaFacebook />
                    <FaLinkedin />
                    <FaInstagram />
                    <FaYoutube />
                </div>
            </div>
            <p>Copyright 2024</p>
        </footer>
    );
};

export default Footer;

