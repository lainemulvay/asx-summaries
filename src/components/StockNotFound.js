import React from 'react';

const StockNotFound = ({ ticker }) => {
  return (
    <div className="stock-not-found">
      <h2>{ticker} was not found on the ASX</h2>
      <p>Please check the ticker symbol and try again.</p>
    </div>
  );
};

export default StockNotFound;
