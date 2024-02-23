import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/" className="header-link">
          <h1>ASX Summaries</h1>
        </Link>
        <input className="search-input" type="text" placeholder="Search stock ticker" />
      </div>
      <div className="header-right">
        <Link to="/" className="header-sublink">
          Home
        </Link>
        <Link to="/announcements" className="header-sublink">
          Today's Announcements
        </Link>
        <Link to="/register" className="header-sublink">
          Register
        </Link>
        <Link to="/login" className="header-sublink">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
