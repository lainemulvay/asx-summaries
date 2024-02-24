import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../database/firebaseConfig';

const Sidebar = ({ ticker }) => {
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
    <div className="sidebar" style={{ position: 'fixed', right: 0 }}>
      <ul>
        {yearsData.map(({ year, pdfs }) => (
          <li key={year}>
            <div className="year-container">
              <Link to={`/${ticker}/${year}`}>{year}</Link>
              <ul className="announcement-list">
                {pdfs.map(pdf => (
                  <li key={pdf.PDFId}>
                    <Link to={`/${ticker}/${year}/${pdf.PDFId}`}>{pdf.PDFName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
