import React from 'react';
import { Link } from 'react-router-dom';
import './AnnouncementTable.css'; // Import your CSS file

const AnnouncementTable = ({ pdfs, ticker }) => {
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

export default AnnouncementTable;
