import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


export default class Header extends Component {
  render() {
    return (
      <header className="header-container">

        <div className="header__logo-container">
          <h1>BJJ For All</h1>
        </div>

        <nav className="header__nav-container">
          <ul className="header__nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/posts">Blog</Link></li>
            
          </ul>
        </nav>
        
      </header>
    )
  }
}
