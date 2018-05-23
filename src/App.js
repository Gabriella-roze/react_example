import React, { Component } from 'react';

// BrowserRouter: React component for how should React behave
// Route: React component used to setup a rule between certail route and components to be visible
import {BrowserRouter, Route} from 'react-router-dom';

// Importing CSS
import './App.css';

// Importing components
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route path="/Gallery/" component={Gallery} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
