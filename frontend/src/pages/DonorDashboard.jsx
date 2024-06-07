import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DonorDashboard.css';
import { FaEdit, FaTrashAlt, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const DonorDashboard = () => {
    const navigate = useNavigate();

    const handleDonateClick = () => {
        navigate('/donate');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <img src={logo} alt="Feed Me" className="dashboard-logo" />
            </header>
            <main className="dashboard-main">
                <h1>Welcome, Donor!</h1>
                <p>Here is a list of your previous donations</p>
                <button className="donate-button" onClick={handleDonateClick}>Donate Food</button>
                <table className="donations-table">
                    <thead>
                        <tr>
                            <th>Food item</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                            <th>Location</th>
                            <th>Contact</th>
                            <th>Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bread</td>
                            <td>Fresh bread</td>
                            <td>3 loaves</td>
                            <td>30-05-2024</td>
                            <td>Kaduna, Nigeria</td>
                            <td>+234 7078657890</td>
                            <td>
                                <FaEdit className="edit-icon" />
                                <FaTrashAlt className="delete-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td>Raw rice</td>
                            <td>5kg</td>
                            <td>31-05-2024</td>
                            <td>Abuja, Nigeria</td>
                            <td>+234 8090876545</td>
                            <td>
                                <FaEdit className="edit-icon" />
                                <FaTrashAlt className="delete-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>Fish</td>
                            <td>Smoked salmon</td>
                            <td>1 basket</td>
                            <td>31-05-2024</td>
                            <td>Lagos, Nigeria</td>
                            <td>+234 9060989890</td>
                            <td>
                                <FaEdit className="edit-icon" />
                                <FaTrashAlt className="delete-icon" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer className="dashboard-footer">
                <img src={logo} alt="Feed Me" className="footer-logo" />
                <div className="footer-social-icons">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </footer>
        </div>
    );
};

export default DonorDashboard;
