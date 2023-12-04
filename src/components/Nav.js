import React from 'react';
import logo from '../logo.svg'; 

function Nav() {
  return (
    <nav>
        <img src={logo} alt="Little Lemon Logo" className="App-logo" />
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
