import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg-shape"></div>
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Vaitheeshwar Badrinarayanan. All Rights Reserved.
        </p>
        <p className="footer-subtext">
          Designed & Developed by <span className="glow-text">Vaitheeshwar</span> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
