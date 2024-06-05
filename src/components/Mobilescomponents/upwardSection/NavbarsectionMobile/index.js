
import React from 'react';
import './index.css'


const Navbar = () => {
  return (
    <div>
      <nav>
      <ul className="navbar-mobile-devices">
        <li><a href="#about">Details</a></li>
        <li><a href="#home">Track details</a></li>
        <li><a href="#contact">Active Log</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
