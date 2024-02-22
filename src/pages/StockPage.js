import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';

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
    <div>
      <h2>{ticker} Announcements</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>PDF Name</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map(pdf => (
            <tr key={pdf.pdfId}>
              <td>{new Date(pdf.date).toLocaleDateString()}</td>
              <td>
                <Link to={`/${ticker}/${pdf.pdfName}`}>
                  {pdf.pdfName}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockPage;
