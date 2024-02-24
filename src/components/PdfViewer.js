import React from 'react';

const PdfViewer = ({ pdfPath, ticker, pdfName, date }) => {
  if (!pdfPath) {
    return (
      <div className="pdf-not-found">
        <p>{ticker} PDF not found.</p>
      </div>
    );
  }

  return (
    <div className="pdf-container" style={{ width: '80%', margin: '0 auto' }}>
      <h2>{pdfName}</h2>
      <h3>{new Date(date).toLocaleDateString()}</h3>
      {/* Add a unique title to the iframe */}
      <iframe
        title={`${pdfName} (${ticker}) Announcement PDF`}
        src={pdfPath}
        className="pdf-iframe"
        style={{ width: '100%', height: '1200px', border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;
