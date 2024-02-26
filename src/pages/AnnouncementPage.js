import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = () => {
  const location = useLocation();
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfName, setPdfName] = useState('');
  const [pdfDate, setPdfDate] = useState('');
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    console.log('Location State:', location.state); // Log location state

    if (location.state && location.state.pdfUrl) {
      setPdfUrl(location.state.pdfUrl);
    }

    if (location.state && location.state.timestamp) {
      setPdfDate(location.state.timestamp);
    }

    if (location.state && location.state.id) {
      console.log('ID:', location.state.id); // Log ID
    }

    if (location.state && location.state.name) {
      setPdfName(location.state.name);
    }

    if (location.state && location.state.priceSensitive) {
      console.log('Price Sensitive:', location.state.priceSensitive); // Log Price Sensitive
    }

    // Store the entire announcement object for later use if needed
    setAnnouncement(location.state);
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
