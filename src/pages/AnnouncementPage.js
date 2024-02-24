import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../database/firebaseConfig';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = () => {
  const { ticker, year, pdfId } = useParams();
  const [pdfDetails, setPdfDetails] = useState(null);

  useEffect(() => {
    const fetchPdfDetails = async () => {
      try {
        const pdfRef = db.collection('ASX').doc(ticker).collection(year).doc(pdfId);
        const pdfDoc = await pdfRef.get();

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
  }, [ticker, year, pdfId]);

  if (!pdfDetails) {
    return <div>Loading PDF...</div>;
  }

  const { PDFName, URL, Date } = pdfDetails;

  return (
    <div>
      <GptSummary summary="Your GPT summary here" />
      <PdfViewer pdfPath={URL} ticker={ticker} pdfName={PDFName} date={Date} />
    </div>
  );
};

export default AnnouncementPage;
