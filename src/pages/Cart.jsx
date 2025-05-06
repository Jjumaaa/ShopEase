import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <a href="/products" className="continue-shopping">Continue Shopping</a>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;