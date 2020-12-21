import React from 'react'
import { Link } from 'react-router-dom'
// import moduleName from 'module'

import '../App.css';

function Navigation() {

  return (
    <nav className="nav">
      <Link className="nav-link-item" to="/">
        <h3>Logo</h3>
      </Link>

      <ul className="nav-links">
        <Link className="nav-link-item" to="/Shop">
          <li>Shop</li>
        </Link>

        <Link className="nav-link-item" to="/Dashboard" >
          <li>Personal</li>
        </Link>

        <Link className="nav-link-item" to="/Reports" >
          <li>Analytics</li>
        </Link>

        <Link className="nav-link-item" to="/Settings">
          <li>Settings</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
