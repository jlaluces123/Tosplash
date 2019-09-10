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

        <div className="hero">
          <h1>Tosplash</h1>
          <p>The internet's source of freely useable images</p>
          <p>Powered by creators everywhere</p>
          <Search />
        </div>

      </div>
    );
  }
}

export default Home;