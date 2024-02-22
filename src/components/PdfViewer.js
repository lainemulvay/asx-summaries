// PdfViewer.js
import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

const PdfViewer = ({ pdfUrl, ticker }) => {
  // Construct the full URL to the PDF file
  const fullUrl = `${process.env.PUBLIC_URL}/pdfs/${pdfUrl}`;

  return (
    <div className="pdf-container">
      <h2>{ticker} Announcement</h2>
      <Document file={fullUrl}>
        <Page className="pdf-page" pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
