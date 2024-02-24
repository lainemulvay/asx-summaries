import React, { useEffect, useState } from 'react';
import db from '../database/firebaseConfig';

const PdfViewer = ({ stockId, pdfId }) => {
  const [pdfDetails, setPdfDetails] = useState(null);

  useEffect(() => {
    const fetchPdfDetails = async () => {
      try {
        const stockRef = db.collection('stocks').doc(stockId);
        const pdfDoc = await stockRef.collection('Announcements').doc(pdfId).get();

        if (!pdfDoc.exists) {
          console.log('PDF not found for ID:', pdfId);
          return;
        }

        setPdfDetails(pdfDoc.data());
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchPdfDetails();
  }, [stockId, pdfId]);

  if (!pdfDetails) {
    return (
      <div className="pdf-not-found">
        <p>PDF not found.</p>
      </div>
    );
  }

  const { PDFName, URL, Date } = pdfDetails;

  return (
    <div className="pdf-container" style={{ width: '80%', margin: '0 auto' }}>
      <h2>{PDFName}</h2>
      <h3>{Date}</h3>
      {/* Add a unique title to the iframe */}
      <iframe
        title={`${PDFName} (${stockId}) Announcement PDF`}
        src={URL}
        className="pdf-iframe"
        style={{ width: '100%', height: '1200px', border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;
