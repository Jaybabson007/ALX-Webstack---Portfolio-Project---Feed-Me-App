import React from 'react';
import '../styles/Signup.css'; 
import logo from '../assets/logo.png';
import signupImage from '../assets/signup.jpg';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-form-content">
          <h1>Get Started Now</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
            
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />

            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="password" placeholder="Confirm your password" />
            
            <div className="radio-group">
              <input type="radio" id="donor" name="role" value="donor" />
              <label htmlFor="donor">Donor</label>
              
              <input type="radio" id="recipient" name="role" value="recipient" />
              <label htmlFor="recipient">Recipient</label>
            </div>
            
            <div className="terms">
              <input type="checkbox" id="terms" />
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
            <p>Have an account? <a href="#">Sign In</a></p>
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
