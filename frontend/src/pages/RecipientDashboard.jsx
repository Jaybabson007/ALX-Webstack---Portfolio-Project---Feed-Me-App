import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../styles/RecipientDashboard.css';

const RecipientDashboard = () => {
  const foodItems = [
    { item: 'Bread', description: 'Fresh bread', quantity: '3 loaves', expiryDate: '30-05-2024', location: 'Kaduna, Nigeria', contact: '+234 7078657890' },
    { item: 'Rice', description: 'Raw rice', quantity: '5kg', expiryDate: '31-05-2024', location: 'Abuja, Nigeria', contact: '+234 8090876545' },
    { item: 'Fish', description: 'Smoked salmon', quantity: '1 basket', expiryDate: '31-05-2024', location: 'Lagos, Nigeria', contact: '+234 9060898890' },
  ];

  return (
    <div className="recipient-dashboard">
      <header>
        <h1>Feed Me.</h1>
      </header>
      <main>
        <div className="dashboard-container">
          <h2>Welcome, Recipient!</h2>
          <p>Here is a list of available food items for you</p>
          <table>
            <thead>
              <tr>
                <th>Food Item</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Location</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((food, index) => (
                <tr key={index}>
                  <td>{food.item}</td>
                  <td>{food.description}</td>
                  <td>{food.quantity}</td>
                  <td>{food.expiryDate}</td>
                  <td>{food.location}</td>
                  <td>{food.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="logo-socials">
            <h3>Feed Me.</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <p>&copy; 2024 Feed Me. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RecipientDashboard;
