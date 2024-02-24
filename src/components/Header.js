import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const searchQuery = searchTerm.trim().toUpperCase();
      window.location.href = `/ASX/${searchQuery}`;
      setSearchTerm('');
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/" className="header-link">
          <h1>ASX Summaries</h1>
        </Link>
        <div className="header-search">
          <input
            className="search-input"
            type="text"
            placeholder="Search stock ticker"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
       
      </div>
      <div className="header-right">
        <Link to="/" className="header-sublink">
          Home
        </Link>
        {/* <Link to="/announcements" className="header-sublink">
          Today's Announcements
        </Link> */}
        <Link to="/ASX/stock-list" className="header-sublink">
          Stock List
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
