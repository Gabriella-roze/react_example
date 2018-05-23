import React, { Component } from 'react';
import './Menu.css';
import logo from '../../logo.svg';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand logo" href="#">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="text__menu--logo">Cocktails Lounge</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Recipes<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>





    );
  }
}
export default Menu;
