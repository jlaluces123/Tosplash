import React, { Component } from 'react';
import './home.css';

import Search from '../Search/index';

class Home extends Component {
  state = {
    images: [],
  };

  render() {
    return (
      <div className="home">
        {/* Hero Section */}
        <div className="hero">
          <h1>Hero Section</h1>
          <Search />
        </div>

        {/* Image List Section */}
        <div className="images">
          <h1>Images</h1>
        </div>
      </div>
    );
  }
}

export default Home;