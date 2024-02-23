import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';

const Sidebar = ({ ticker }) => {
  const [hoveredYear, setHoveredYear] = useState(null);
  const pdfs = getPDFsFromDatabase().filter(pdf => pdf.ticker === ticker);

  const years = Array.from({ length: 10 }, (_, index) => {
    const year = new Date().getFullYear() - index;
    const yearPdfs = pdfs.filter(pdf => new Date(pdf.date).getFullYear() === year);
    return { year, pdfs: yearPdfs };
  });

  const handleYearHover = (year) => {
    setHoveredYear(year);
  };

  return (
    <div className="sidebar" style={{ position: 'fixed', right: 0 }}>
      <ul>
        {years.map(({ year, pdfs }) => (
          <li key={year}>
            <div className="year-container" onMouseEnter={() => handleYearHover(year)}>
              <Link to={`/${ticker}/${year}`}>{year}</Link>
              {hoveredYear === year && (
                <ul className="announcement-list">
                  {pdfs.map(pdf => (
                    <li key={pdf.pdfId}>
                      <Link to={`/${ticker}/${pdf.pdfName}`}>{pdf.pdfName}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
