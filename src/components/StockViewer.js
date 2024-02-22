// StockViewer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';

const StockViewer = ({ match }) => {
  const [pdfs, setPDFs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = getPDFsFromDatabase();
      setPDFs(data.filter(pdf => pdf.ticker === match.params.ticker));
    };

    fetchData();
  }, [match.params.ticker]);

  return (
    <div>
      <h2>Stock Viewer - {match.params.ticker}</h2>
      <ul>
        {pdfs.map(pdf => (
          <li key={pdf.pdfId}>
            <Link to={`/${match.params.ticker}/${pdf.pdfId}`}>
              {pdf.date} - {pdf.pdfId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockViewer;
