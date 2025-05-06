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
      
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-products">
          <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1723961617032-ef69c454cb31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZW1pdW0lMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww" alt="Featured Product" />
            <h3>Premium Headphones</h3>
            <p>$129.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;