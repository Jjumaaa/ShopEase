import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card">
      <div className="image-container">
        {!imageLoaded && <div className="image-loader"></div>}
        <img
          src={product.image}
          alt={product.name}
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        <button 
          className="quick-add-btn"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < Math.floor(product.rating) ? 'filled' : ''} 
            />
          ))}
          <span>({product.rating})</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;