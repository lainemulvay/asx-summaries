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
          const data = doc.data();
          return {
            id: doc.id,
            ticker: doc.id,
            companyName: data.Name, // Adjust this according to your Firestore structure
            marketCap: data.marketCap, // Adjust this according to your Firestore structure
            price: data.price, // Adjust this according to your Firestore structure
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
