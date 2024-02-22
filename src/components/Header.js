import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-link">
        <h1>ASX Summaries</h1>
      </Link>
      <input className="search-input" type="text" placeholder="Search stock ticker" />
    </header>
  );
};

export default Header;
