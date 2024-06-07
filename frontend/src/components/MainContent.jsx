import React from 'react';
import '../styles/MainContent.css';
import foodImage from '../assets/homepage.jpg'; 

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="about-us">
                <h1>About Us</h1>
                <p className="tagline">We are your go to food redistribution App</p>
                <p className="description">
                    Connecting surplus food to those in need, thereby fostering sustainability and reducing food waste. 
                    "Feed Me" addresses the issue of food waste by connecting food establishments with surplus food to 
                    individuals or organizations in need. This app targets food establishments with surplus food and 
                    individuals or organizations facing food insecurity. It functions as a platform that connects these 
                    two together thereby, fostering sustainability and reducing food waste. Feed me solves a systemic 
                    issue of food waste and food insecurity by connecting those with surplus food to those in need.
                </p>
                <button className="btn signup-now-btn">Sign Up Now</button>
            </section>
            <img src={foodImage} alt="Food" className="food-image" />
        </main>
    );
};

export default MainContent;

