import React from 'react';
import './navigation.css';

// Asset Imports
import logo from '../assets/tosplash-logo.svg';
import { Link } from 'react-router-dom';

// Component Imports
import Search from '../Search/index';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="left-nav">
        <img src = { logo } alt = "tosplash | photos for everyone" />
        <Search className = "search-nav" />
      </div>

      <div className="right-nav">
        <Link className = "link__login link-btn" to = "/login">Login</Link>
        <Link className = "link__join link-btn" to = "/join">Join Now</Link>
      </div>
    </div>
  );
}

export default Navigation;