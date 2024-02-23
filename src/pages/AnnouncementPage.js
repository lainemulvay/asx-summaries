import React from 'react';
import { useParams } from 'react-router-dom';
import { getPDFsFromDatabase } from '../database/pdfDatabase';
import PdfViewer from '../components/PdfViewer';
import GptSummary from '../components/GptSummary';

const AnnouncementPage = () => {
  const { ticker, pdfName } = useParams();

  // Create pdfPath from pdfName
  const pdfPath = `${process.env.PUBLIC_URL}/pdfs/${pdfName}.pdf`;
  console.log('PDF Path:', pdfPath);

  const pdfs = getPDFsFromDatabase();
  const pdf = pdfs.find(pdf => pdf.ticker === ticker && pdf.pdfName === pdfName);

  if (!pdf) {
    return <div>PDF not found</div>;
  }

  return (
    <div>
      <GptSummary summary="Your GPT summary here" />
      <PdfViewer pdfPath={pdfPath} ticker={ticker} />
    
    </div>
  );
};

export default AnnouncementPage;
