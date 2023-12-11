import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Nav() {
  return (
    <nav>
        <img src={logo} alt="Little Lemon Logo" className="App-logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;
