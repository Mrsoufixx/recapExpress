import React from 'react';
import { Link } from 'react-router-dom';
import "./layouts.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        {/* <div className="logo">
          <img src="" alt="My Website Logo" />
        </div> */}
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="search-input">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
