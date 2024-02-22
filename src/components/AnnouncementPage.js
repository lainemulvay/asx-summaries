// AnnouncementPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';
import PdfViewer from './PdfViewer';
import GptSummary from './GptSummary';

const AnnouncementPage = () => {
  const { ticker, pdfId } = useParams();
  const pdfs = getPDFsFromDatabase();
  const pdf = pdfs.find(pdf => pdf.ticker === ticker && pdf.pdfId === pdfId);

  if (!pdf) {
    return <div>PDF not found</div>;
  }

  return (
    <div>
      <h2>{pdf.ticker} Announcement</h2>
      <PdfViewer pdfUrl={pdf.pdfUrl} />
      <GptSummary summary="Your GPT summary here" />
    </div>
  );
};

export default AnnouncementPage;
