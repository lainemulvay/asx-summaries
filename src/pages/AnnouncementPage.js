// AnnouncementPage.js
import React from 'react';
import GptSummary from './GptSummary';
import PdfViewer from './PdfViewer';
import Footer from './Footer';
import './AnnouncementPage.css';

const AnnouncementPage = ({ summary, pdfUrl }) => {
  return (
    <div className="announcement-page">
      <main>
        <div className="content">
          <GptSummary summary={summary} />
          <PdfViewer pdfUrl={pdfUrl} />
        </div>
      </main>
    </div>
  );
};

export default AnnouncementPage;
