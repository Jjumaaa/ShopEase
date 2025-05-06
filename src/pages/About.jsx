import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About ShopEase</h1>
        <p>Your trusted online shopping destination</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, ShopEase was created with a simple mission: to make online shopping
            easy, enjoyable, and accessible to everyone. We carefully curate our product selection
            to bring you the best items at competitive prices.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>Customer satisfaction is our top priority</li>
            <li>Quality products at fair prices</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;