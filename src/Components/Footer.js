import React from 'react';
import './Footer.css'; // Import the CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">VIVEKA CHESS ACADEMY</a>
          <a href="/About">ABOUT US</a>
          <a href="/Contact">CONTACT US</a>
        </div>
        <div className="footer-info">
          <p>Viveka Chess Academy</p>
          <p># 30/64, 3rd cross, Gangappa Layout, Shakthinagar, near Pai Layout, Bangalore 560016</p>
          <p><a href="tel:+91 96866 54537">+91 96866 54537</a> / <a href="tel:+91 95380 60442">+91 95380 60442</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Viveka Chess Academy - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
