import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../database/firebaseConfig';
import AnnouncementTable from '../components/AnnouncementTable';
import Sidebar from '../components/Sidebar';

const StockHomePage = () => {
  const { ticker } = useParams();
  const [pdfs, setPDFs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockRef = db.collection('ASX').doc(ticker);
        const doc = await stockRef.get();

        if (!doc.exists) {
          console.log('No such document!');
          return;
        }

        const stockData = doc.data();
        const yearsData = [];

        for (const year in stockData) {
          const pdfs = stockData[year].pdfs;
          yearsData.push({
            year,
            pdfs,
          });
        }

        setPDFs(yearsData);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [ticker]);

  return (
    <div className="stock-page">
      <div className="header-container">
        {/* Your header content here */}
      </div>
      <div className="main-container">
        <AnnouncementTable pdfs={pdfs} ticker={ticker} />
        <Sidebar ticker={ticker} />
      </div>
    </div>
  );
};

export default StockHomePage;
