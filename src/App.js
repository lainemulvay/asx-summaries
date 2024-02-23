import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnnouncementPage from './pages/AnnouncementPage';
import StockPage from './pages/StockPage';
import StockListPage from './pages/StockListPage';
import Header from './components/Header';
import Footer from './components/Footer';
import StockNotFound from './components/StockNotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stock-list" element={<StockListPage />} />
            <Route path="/:ticker" element={<StockPage />} />
            <Route path="/:ticker/:pdfName" element={<AnnouncementPage />} />
            <Route path="/:ticker/not-listed" element={<StockNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
