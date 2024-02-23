import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';
import './Sidebar.css';


const Sidebar = () => {
  const pdfs = getPDFsFromDatabase();
  const location = useLocation();
  const currentPath = location.pathname;

  // Create an object to group pdfs by ticker
  const groupedPDFs = pdfs.reduce((acc, pdf) => {
    if (!acc[pdf.ticker]) {
      acc[pdf.ticker] = [];
    }
    acc[pdf.ticker].push(pdf);
    return acc;
  }, {});

  // Determine if we are on the Home page (/) or a specific stock page (/ticker/:pdfName)
  const isHomePage = currentPath === '/';

  return (
    <div className="sidebar">
      <ul>
        {isHomePage && (
          // Show a list of all stocks only on the Home page
          Object.keys(groupedPDFs).map(ticker => (
            <li key={ticker}>
              <Link to={`/${ticker}`}>
                {ticker}
              </Link>
            </li>
          ))
        )}
        {currentPath.split('/').length === 3 && (
          // Show the list of announcements for the specific stock on its page (/ticker/:pdfName)
          Object.keys(groupedPDFs).map(ticker => {
            if (currentPath === `/${ticker}/${groupedPDFs[ticker][0].pdfName}`) {
              return (
                <React.Fragment key={ticker}>
                  <li>
                    <strong>{ticker} Announcements</strong>
                  </li>
                  {groupedPDFs[ticker].map(pdf => (
                    <li key={pdf.pdfId}>
                      <Link to={`/${ticker}/${pdf.pdfName}`}>
                        {pdf.pdfName} PDF
                      </Link>
                    </li>
                  ))}
                </React.Fragment>
              );
            }
            return null;
          })
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
