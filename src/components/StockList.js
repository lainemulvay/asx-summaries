import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../database/firebaseConfig';
import './StockList.css';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const stocksCollection = collection(db, 'ASX');
        const snapshot = await getDocs(stocksCollection);

        const stocksData = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ticker: doc.id,
            marketCap: doc.data().marketCap,
            price: doc.data().price,
            // Add more fields as needed
          };
        });

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
            <th>Market Cap</th>
            <th>Price</th>
            {/* Add more headers if needed */}
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>
                <Link to={`/ASX/${stock.ticker}`}>
                  {stock.ticker}
                </Link>
              </td>
              <td>{stock.marketCap}</td>
              <td>{stock.price}</td>
              {/* Render more data here if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
