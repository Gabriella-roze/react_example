import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../../logo.svg';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand logo">
          <img src={logo} className="app-logo" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Search
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/all_recipes">See All Recipes</Link>
                <Link className="dropdown-item" to="/gallery">Look by Name</Link>
                <Link className="dropdown-item" to="/gallery">Look by Base Drink</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>





    );
  }
}
export default Menu;
