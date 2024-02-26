import React from 'react';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = ({ announcement, stockName, onBack }) => {
  if (!announcement) {
    return <div>Loading PDF...</div>;
  }

  return (
    <div>
      <button onClick={onBack}>Back to Announcement List</button>
      <GptSummary summary="Your GPT summary here" />
      <div style={{ maxWidth: '80%', margin: '0 auto', overflowWrap: 'break-word' }}>
        <h2>{announcement.Name}</h2> 
        <p>Date: {announcement.Timestamp ? announcement.Timestamp.toDate().toLocaleString() : 'N/A'}</p>
      </div>
      <PdfViewer pdfUrl={announcement.URL} />
    </div>
  );
};

export default AnnouncementPage;
