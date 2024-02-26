import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ ticker }) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const currentYear = new Date().getFullYear();
        const yearsData = Array.from({ length: 11 }, (_, i) => currentYear - i);
        setYears(yearsData);
      } catch (error) {
        console.error('Error fetching years:', error);
      }
    };

    fetchYears();
  }, [ticker]);

  return (
    <div className="sidebar">
      <h3>Years</h3>
      <ul>
        {years.length > 0 ? (
          years.map((year, index) => (
            <li key={index}>
              <Link to={`/ASX/${ticker}/${year}`}>
                {year}
              </Link>
            </li>
          ))
        ) : (
          <li>No available years</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
