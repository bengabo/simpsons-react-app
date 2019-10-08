import React from 'react';
import './Navbar.css';
import logo from '../img/donut.png';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <img className="donut" title="Donut" alt="Donut" src={logo}/>
        <p>Simpsons App </p>
      </nav>
    </div>
  );
}

export default Navbar;