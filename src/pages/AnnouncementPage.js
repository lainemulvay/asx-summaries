import React from 'react';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = ({ announcement, stockName, onBack }) => {
  if (!announcement) {
    return <div>Loading PDF...</div>;
  }

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#23305e',
    border: 'none',
    cursor: 'pointer',
  };

  const handleBackClick = () => {
    onBack();
  };

  return (
    <div>
      <button onClick={handleBackClick} style={buttonStyle}>
        Back to Announcement List
      </button>
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
