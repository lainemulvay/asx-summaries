import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AnnouncementTable.css'; // Import your CSS file

const AnnouncementTable = ({ pdfs, ticker }) => {
  const navigate = useNavigate();

  const handlePdfClick = (pdfName) => {
    const pdf = pdfs.find(pdf => pdf.pdfName === pdfName);
    if (!pdf) {
      navigate(`/${ticker}/announcement-not-found`);
    }
  };

  return (
    <div className="announcement-table-container">
      <h2>{ticker}</h2>
      <table className="announcement-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Announcement</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map(pdf => (
            <tr key={pdf.pdfId}>
              <td>{new Date(pdf.date).toLocaleDateString()}</td>
              <td>
                <a
                  href={`${process.env.PUBLIC_URL}/${ticker}/${pdf.pdfName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePdfClick(pdf.pdfName)}
                >
                  {pdf.pdfName}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnouncementTable;
