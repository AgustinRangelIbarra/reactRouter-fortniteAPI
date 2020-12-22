import React from 'react'
import { Link } from 'react-router-dom'
// import moduleName from 'module'

import '../App.css';

function Navigation (props) {

  return (
    <nav className="nav">
      
      <Link className="nav-link-item" to="/">
        <h3>Logo Rangel</h3>
      </Link>

      <ul className="nav-links">
        <Link className="nav-link-item" to="/Shop">
          <li>Shop</li>
        </Link>

        <Link className="nav-link-item" to="/Tweets">
          <li>Twitter</li>
        </Link>
        
        <Link className="nav-link-item" to="/Dashboard" >
          <li>Dashboard</li>
        </Link>

        <Link className="nav-link-item" to="/Reports" >
          <li>Analytics</li>
        </Link>

        <Link className="nav-link-item" to="/Settings">
          {props.toggle ? <li>Settings</li> : ""}
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
