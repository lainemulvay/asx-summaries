import React from 'react';
import './AnnouncementTable.css';

const AnnouncementTable = ({ announcements, ticker, onAnnouncementClick }) => {
  return (
    <div className="announcement-table-container">
      <h2>Announcements for {ticker}</h2>
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
          {announcements.map((announcement, index) => (
            <tr key={index}>
              <td>{announcement.Timestamp ? new Date(announcement.Timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}</td>
              <td>
                <button onClick={() => onAnnouncementClick(announcement)}>
                  {announcement.Name}
                </button>
              </td>
              <td>{announcement.Pages || 'N/A'}</td>
              <td>{announcement.PriceSens ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnouncementTable;
