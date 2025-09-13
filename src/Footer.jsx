import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <p className="footerText">© 2025 SMOKE CITY. All Rights Reserved.</p>
        <div className="socialLinks">
          <a href="https://facebook.com" className="socialLink">
            Facebook
          </a>
          <a href="https://twitter.com" className="socialLink">
            Twitter
          </a>
          <a href="https://instagram.com" className="socialLink">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
