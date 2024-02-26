import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import getStocks from '../database/getStocks';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      const searchQuery = searchTerm.trim().toUpperCase();
      const stockList = await getStocks();
      console.log('Stock List:', stockList); // Log the stock list

      const foundStock = stockList.find(stock => stock.ticker === searchQuery);
      if (foundStock) {
        window.location.href = `/ASX/${searchQuery}`;
      } else {
        window.location.href = `/not-listed?search=${searchQuery}`;
      }

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
        <Link to="/ASX/stock-list" className="header-sublink">
          Stock List
        </Link>
      </div>
    </header>
  );
};

export default Header;
