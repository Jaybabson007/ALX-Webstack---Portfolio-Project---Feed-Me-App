import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import loginImage from '../assets/login.jpg';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-form-content">
          <h2>Welcome back!</h2>
          <p>Enter your Credentials to access your account</p>
          <form>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />

            <div className="radio-group">
              <input type="radio" id="donor" name="role" value="donor" />
              <label htmlFor="donor">Donor</label>

              <input type="radio" id="recipient" name="role" value="recipient" />
              <label htmlFor="recipient">Recipient</label>
            </div>

            <button type="submit" className="auth-button">Login</button>
          </form>
          
          <div className="or">Or</div>

          <div className="social-login">
            <button className="google-login">Sign in with Google</button>
            <button className="apple-login">Sign in with Apple</button>
          </div>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
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
      <div className="auth-image-container">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
