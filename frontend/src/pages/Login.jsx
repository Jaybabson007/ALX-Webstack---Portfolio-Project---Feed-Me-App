import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Add Link here
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import loginImage from '../assets/login.jpg';

const Login = () => {
  const [role, setRole] = useState('donor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'donor') {
      navigate('/donor-dashboard');
    } else if (role === 'recipient') {
      navigate('/recipient-dashboard');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-form-content">
          <h2>Welcome back!</h2>
          <p>Enter your Credentials to access your account</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="radio-group">
              <input
                type="radio"
                id="donor"
                name="role"
                value="donor"
                checked={role === 'donor'}
                onChange={() => setRole('donor')}
              />
              <label htmlFor="donor">Donor</label>

              <input
                type="radio"
                id="recipient"
                name="role"
                value="recipient"
                checked={role === 'recipient'}
                onChange={() => setRole('recipient')}
              />
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
            Don't have an account? <Link to="/signup">Sign Up</Link> {/* Use Link here */}
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
