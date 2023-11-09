import React from 'react';
import "./layouts.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and products.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>City, Country</p>
            <p>Email: contact@mywebsite.com</p>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
  );
}

export default Footer;
