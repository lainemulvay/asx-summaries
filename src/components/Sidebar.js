import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/IDX/abcde">IDX Announcement</Link>
      {/* Add more links for other tickers */}
    </div>
  );
};

export default Sidebar;
