import React, { Component } from 'react';
import './home.css';

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