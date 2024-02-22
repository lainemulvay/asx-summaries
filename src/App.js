// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnnouncementPage from './pages/AnnouncementPage';
import StockPage from './pages/StockPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:ticker" element={<StockPage />} />
            <Route path="/:ticker/:pdfName" element={<AnnouncementPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
