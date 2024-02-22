import React from 'react';
import { Link } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';

const Sidebar = () => {
  const pdfs = getPDFsFromDatabase();

  // Create an object to group pdfs by ticker
  const groupedPDFs = pdfs.reduce((acc, pdf) => {
    if (!acc[pdf.ticker]) {
      acc[pdf.ticker] = [];
    }
    acc[pdf.ticker].push(pdf);
    return acc;
  }, {});

  return (
    <div className="sidebar">
      <ul>
        {Object.keys(groupedPDFs).map(ticker => (
          <React.Fragment key={ticker}>
            <li>
              <Link to={`/${ticker}`}>{ticker} Stock</Link>
              <ul>
                {groupedPDFs[ticker].map(pdf => (
                  <li key={pdf.pdfId}>
                    <Link to={`/${ticker}/${pdf.pdfName}`}>{pdf.pdfName} PDF</Link>
                  </li>
                ))}
              </ul>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
