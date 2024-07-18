import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2023 Yourcompany</p>
        </div>
        <div className="footer-center">
          <h1>Landing</h1>
        </div>
        <div className="footer-right">
          <button className="btnFooter">Purchase now</button>
        </div>
      </div>
     
      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul className="footer-social">
        <li><a href="#"><img src="/facebook.png" alt="Facebook" className="social-icon" /></a></li>
          <li><a href="#"><img src="/linkedin.png" alt="LinkedIn" className="social-icon" /></a></li>
          <li><a href="#"><img src="/X.png" alt="Twitter" className="social-icon" /></a></li>
          <li><a href="#"><img src="/youtube.png" alt="YouTube" className="social-icon" /></a></li>
          <li><a href="#"><img src="/instagram.png" alt="Instagram" className="social-icon" /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
