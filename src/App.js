import React, { Component } from 'react';

// BrowserRouter: React component for how should React behave
// Route: React component used to setup a rule between certail route and components to be visible
import {BrowserRouter, Route} from 'react-router-dom';

// Importing CSS
import './App.css';

// Importing components
import Menu from './components/menu/Menu';
import AllRecipes from './components/all_recipes/AllRecipes';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route path="/gallery/" component={Gallery} />
            <Route path="/all_recipes/" component={AllRecipes} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
