import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StockList.css';
import getStocks from '../database/getStocks';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const stocksData = await getStocks();
        setStocks(stocksData);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="stock-list-container">
      <h2>Stock List</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Company</th>
            <th>Market Cap</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>
                <Link to={`/ASX/${stock.ticker}`} className="link">
                  {stock.ticker}
                </Link>
              </td>
              <td>
                <Link to={`/ASX/${stock.ticker}`} className="link">
                  {stock.companyName}
                </Link>
              </td>
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
