import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
      <header>
        <div className="l-wrapper">
          <div className="header__inside clearfix">
            <nav>
            <ul className="clearfix">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/trailer">Trailers</Link></li>
            </ul>
            </nav>
          </div>
        </div>
      </header>
      </>
    );
  }
}

export default Header;