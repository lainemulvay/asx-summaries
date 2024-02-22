// PdfViewer.js
import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

const PdfViewer = ({ pdfUrl, ticker }) => {
  // Construct the full URL to the PDF file
  const fullUrl = `${process.env.PUBLIC_URL}/pdfs/${pdfUrl}`;

  return (
    <div className="pdf-container" style={{ width: '80%', margin: '0 auto' }}>
      <h2>{ticker} Announcement</h2>
      <Document file={fullUrl}>
        {/* Loop through all pages */}
        {Array.from(new Array(5), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} className="pdf-page" />
        ))}
      </Document>
      {/* Add a unique title to the iframe */}
      <iframe
        title={`${ticker} Announcement`}
        src={fullUrl}
        className="pdf-iframe"
        style={{ width: '100%', height: '1200px', border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;
