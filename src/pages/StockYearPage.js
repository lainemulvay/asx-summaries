import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../database/firebaseConfig';
import AnnouncementTable from '../components/AnnouncementTable';
import Sidebar from '../components/Sidebar';

const StockPage = () => {
  const { ticker } = useParams();
  const [yearsData, setYearsData] = useState([]);

  useEffect(() => {
    const fetchYearsData = async () => {
      try {
        const stockRef = db.collection('ASX').doc(ticker);
        const snapshot = await stockRef.get();

        if (!snapshot.exists) {
          console.log('Stock not found in database');
          return;
        }

        const yearsData = [];
        const years = snapshot.data();

        for (const year in years) {
          const pdfs = years[year];
          yearsData.push({
            year,
            pdfs,
          });
        }

        setYearsData(yearsData);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchYearsData();
  }, [ticker]);

  return (
    <div className="stock-page">
      <div className="header-container">
        {/* Your header content here */}
      </div>
      <div className="main-container">
        <AnnouncementTable pdfs={yearsData} ticker={ticker} />
        <Sidebar ticker={ticker} />
      </div>
    </div>
  );
};

export default StockPage;
