import React from 'react';
import { useLocation } from 'react-router-dom';

const StockNotFound = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ticker = searchParams.get('search');

  return (
    <div className="stock-not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <h2 style={{ textAlign: 'center' }}>{ticker} was not found on the ASX</h2>
      <p style={{ textAlign: 'center' }}>Please check the ticker symbol and try again.</p>
    </div>
  );
};

export default StockNotFound;
