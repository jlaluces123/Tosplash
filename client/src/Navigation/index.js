import React from 'react';
import './navigation.css';

// Asset Imports
import logo from '../assets/tosplash-logo.svg';

const Navigation = () => {
  return (
    <div className="navigation">
      <img src = { logo } alt = "tosplash | photos for everyone" />
    </div>
  );
}

export default Navigation;