import React from 'react';
import './StockList.css'; // Import the CSS file for StockList

const StockList = () => {
  // Sample data for demonstration
  const stocks = [
    { ticker: 'BHP', marketCap: '100B', price: '$50.00' },
    { ticker: 'CBA', marketCap: '80B', price: '$120.50' },
    { ticker: 'TLS', marketCap: '40B', price: '$3.80' },
    { ticker: 'WBC', marketCap: '70B', price: '$28.75' },
    { ticker: 'ANZ', marketCap: '60B', price: '$25.40' },
  ];

  return (
    <div className="stock-list-container">
      <h2>ASX List</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Market Cap</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.ticker}</td>
              <td>{stock.marketCap}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
