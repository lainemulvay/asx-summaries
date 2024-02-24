import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AnnouncementTable.css';

const AnnouncementTable = ({ ticker, year, announcements }) => {
  const [announcementsData, setAnnouncementsData] = useState([]);

  useEffect(() => {
    setAnnouncementsData(announcements);
  }, [announcements]);

  return (
    <div className="announcement-table-container">
      <h2>Announcements for {ticker} - {year}</h2>
      <table className="announcement-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Pages</th>
            <th>Price Sensitive</th>
          </tr>
        </thead>
        <tbody>
          {announcementsData.map((announcement, index) => (
            <tr key={index}>
              <td>{announcement.Timestamp ? new Date(announcement.Timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}</td>
              <td>
                <Link
                  to={{
                    pathname: `/ASX/${ticker}/announcement/${announcement.ID}`,
                    state: {
                      pdfUrl: announcement.URL,
                      timestamp: announcement.Timestamp ? announcement.Timestamp.toDate().toLocaleString() : 'N/A'
                    }
                  }}
                >
                  {announcement.Name}
                </Link>
              </td>
              <td>{announcement.Pages ? announcement.Pages : 'N/A'}</td>
              <td>{announcement.PriceSens ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnouncementTable;
