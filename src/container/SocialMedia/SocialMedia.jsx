// SocialMediaIcons.js
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <div className="icon">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
