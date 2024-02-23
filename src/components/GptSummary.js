import React from 'react';
import './GptSummary.css';

const GptSummary = ({ summary }) => {
  return (
    <div className="summary-container">
      <div className="summary-content">
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default GptSummary;
