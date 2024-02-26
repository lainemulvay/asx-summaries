import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../database/firebaseConfig';
import AnnouncementTable from '../components/AnnouncementTable';
import Sidebar from '../components/Sidebar';
import getAnnouncements from '../database/getAnnouncements';
import AnnouncementPage from './AnnouncementPage';

const StockYearPage = () => {
  const { ticker, year } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const [stockName, setStockName] = useState('');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const fetchYearData = async () => {
      try {
        const announcementsData = await getAnnouncements(ticker, year);
        setAnnouncements(announcementsData);

        const stockSnapshot = await db.collection('ASX').doc(ticker).get();
        if (stockSnapshot.exists) {
          setStockName(stockSnapshot.data().Name);
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchYearData();
  }, [ticker, year]);

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const handleBack = () => {
    setSelectedAnnouncement(null);
  };

  if (selectedAnnouncement) {
    return (
      <AnnouncementPage
        announcement={selectedAnnouncement}
        stockName={stockName}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="stock-page">
      <div className="main-container">
        <AnnouncementTable
          announcements={announcements}
          ticker={ticker}
          onAnnouncementClick={handleAnnouncementClick}
        />
        <Sidebar year={year} ticker={ticker} />
      </div>
    </div>
  );
};

export default StockYearPage;
