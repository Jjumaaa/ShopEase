import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>123 Shop Street, Commerce City, CC 10001</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>support@shopease.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h3>Hours</h3>
              <p>Monday-Friday: 9am-6pm</p>
              <p>Saturday: 10am-4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;