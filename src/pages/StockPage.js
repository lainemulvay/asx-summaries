import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';
import AnnouncementTable from '../components/AnnouncementTable';
import Sidebar from '../components/Sidebar';

const StockPage = () => {
  const { ticker } = useParams();
  const [pdfs, setPDFs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = getPDFsFromDatabase();
      setPDFs(data.filter(pdf => pdf.ticker === ticker));
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

export default StockPage;
