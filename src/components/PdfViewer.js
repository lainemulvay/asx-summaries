import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div className="pdf-container" style={{ width: '80%', margin: '0 auto' }}>
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        className="pdf-iframe"
        style={{ width: '100%', height: '1200px', border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;
