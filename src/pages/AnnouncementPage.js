import React from 'react';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = ({ announcement, stockName, onBack }) => {
  if (!announcement) {
    return <div>Loading PDF...</div>;
  }

  return (
    <div>
      <GptSummary summary="Your GPT summary here" />
      <div>
        <h2>{announcement.Name}</h2>
        <p>Date: {announcement.Timestamp ? announcement.Timestamp.toDate().toLocaleString() : 'N/A'}</p>
        <PdfViewer pdfUrl={announcement.URL} />
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default AnnouncementPage; // Make sure to export
