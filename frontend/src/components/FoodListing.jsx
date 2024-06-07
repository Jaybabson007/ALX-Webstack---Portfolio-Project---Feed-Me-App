import React, { useState } from 'react';
import '../styles/FoodListing.css';
import donateImage from '../assets/donate.jpg';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const FoodListing = () => {
  const [formData, setFormData] = useState({
    foodItem: '',
    description: '',
    quantity: '',
    expiryDate: '',
    location: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="food-listing-container">
      <div className="form-container">
        <h2>Donate Now!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="foodItem"
            placeholder="Food Item"
            value={formData.foodItem}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <input
            type="date"
            name="expiryDate"
            placeholder="Expiry Date"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <footer className="footer">
        <h3>Feed Me.</h3>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </footer>
      </div>
      <div className="image-container">
        <img src={donateImage} alt="Donor with food" />
      </div>
     
    </div>
  );
};

export default FoodListing;
