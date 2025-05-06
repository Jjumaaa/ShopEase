import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </section>
      
    
    </div>
  );
};

export default Home;