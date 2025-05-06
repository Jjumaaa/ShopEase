import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopEase</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;