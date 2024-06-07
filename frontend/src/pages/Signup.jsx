import React, { useState } from 'react';
import '../styles/Signup.css'; 
import logo from '../assets/logo.png';
import signupImage from '../assets/signup.jpg';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    terms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
    // After successful signup, navigate to the login page
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-form-content">
          <h1>Get Started Now</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            
            <div className="radio-group">
              <input
                type="radio"
                id="donor"
                name="role"
                value="donor"
                checked={formData.role === 'donor'}
                onChange={handleChange}
              />
              <label htmlFor="donor">Donor</label>
              
              <input
                type="radio"
                id="recipient"
                name="role"
                value="recipient"
                checked={formData.role === 'recipient'}
                onChange={handleChange}
              />
              <label htmlFor="recipient">Recipient</label>
            </div>
            
            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms">I agree to the terms & policy</label>
            </div>
            
            <button type="submit" className="signup-button">Signup</button>
            
            <div className="or">Or</div>
            
            <div className="social-login">
              <button className="google-login">Sign in with Google</button>
              <button className="apple-login">Sign in with Apple</button>
            </div>
          </form>
          
          <div className="signin-link">
            <p>Have an account? <Link to="/login">Sign In</Link></p>
          </div>
        </div> 
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
      
      <div className="signup-image">
        <img src={signupImage} alt="Signup" />
      </div>
    </div>
  );
}

export default Signup;
