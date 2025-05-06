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
          {/* These would be actual featured products in a real app */}
          <div className="featured-item">
            <img src="/images/placeholder-product.jpg" alt="Featured Product" />
            <h3>Premium Headphones</h3>
            <p>$129.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;