import React from 'react';
import './GptSummary.css';

const GptSummary = ({ summary }) => {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

export default GptSummary;
