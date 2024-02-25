import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = () => {
  const location = useLocation();
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfName, setPdfName] = useState('');
  const [pdfDate, setPdfDate] = useState('');

  useEffect(() => {
    if (location.state && location.state.pdfUrl) {
      console.log('PDF URL:', location.state.pdfUrl);
      setPdfUrl(location.state.pdfUrl);
    }

    if (location.state && location.state.pdfName) {
      console.log('PDF Name:', location.state.pdfName);
      setPdfName(location.state.pdfName);
    }

    if (location.state && location.state.pdfDate) {
      console.log('PDF Date:', location.state.pdfDate);
      setPdfDate(location.state.pdfDate);
    }
  }, [location.state]);

  if (!pdfUrl) {
    return <div>Loading PDF...</div>;
  }

  return (
    <div>
      <GptSummary summary="Your GPT summary here" />
      <div>
        <h2>{pdfName}</h2>
        <p>Date: {pdfDate}</p>
        <PdfViewer pdfUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default AnnouncementPage;
