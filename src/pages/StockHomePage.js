import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../database/firebaseConfig';
import getAnnouncements from '../database/getAnnouncements';
import AnnouncementTable from '../components/AnnouncementTable';
import Sidebar from '../components/Sidebar';

const StockHomePage = () => {
  const { ticker } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const [stockName, setStockName] = useState('');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockRef = db.collection('ASX').doc(ticker);
        const stockDoc = await stockRef.get();

        if (!stockDoc.exists) {
          console.log('Stock not found in database');
          return;
        }

        const stockData = stockDoc.data();
        setStockName(stockData.Name);

        // Get current year
        const currentYear = new Date().getFullYear();

        // Fetch announcements for the current year using getAnnouncements function
        const announcementsData = await getAnnouncements(ticker, currentYear);
        setAnnouncements(announcementsData);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, [ticker]);

  return (
    <div className="stock-page">
      <div className="content">
        < h2> {ticker}</h2>
        <p> Choose a year to view announcements.</p>
        <Sidebar years={announcements} ticker={ticker} />
      </div>
    </div>
  );
};

export default StockHomePage;
