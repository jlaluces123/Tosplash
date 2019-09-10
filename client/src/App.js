import React from 'react';
import './App.css';

// Dependency Imports
import { Route, Switch } from 'react-router-dom';

// Component Imports
import Navigation from './Navigation/index';
import Home from './Home/index';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navigation Goes Here */}
        <Navigation />
      </header>

      <main className="main">
        <Switch>
          <Route exact path = "/" component = { Home } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
