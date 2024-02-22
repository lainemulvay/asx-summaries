import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1>ASX Summaries</h1>
      <input className="search-input" type="text" placeholder="Search stock ticker" />
    </header>
  );
};

export default Header;
