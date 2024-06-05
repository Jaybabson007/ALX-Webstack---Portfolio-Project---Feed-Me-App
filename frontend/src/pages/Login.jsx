import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
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
          
          <div className="social-login">
            <p>Or</p>
            <button className="google-login">Sign in with Google</button>
            <button className="apple-login">Sign in with Apple</button>
          </div>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <footer className="footer">
          <img src={logo} alt="Feed Me" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
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
