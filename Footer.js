import React from 'react';

const Footer1 = () => {
  return (
    <footer className="footer1">
      <div className="footer-nav-links">
        <a href="/support" className="footer-nav-link">Support</a>
        <a href="/community" className="footer-nav-link">Community</a>
        <a href="/hosting" className="footer-nav-link">Hosting</a>
        <a href="/about" className="footer-nav-link">About</a>
      </div>
      
      <div className="footer-social-container">
        <a href="https://facebook.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      
      <div className="footer-rights">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer1;
