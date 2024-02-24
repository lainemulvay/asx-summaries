import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnnouncementPage from './pages/AnnouncementPage';
import StockHomePage from './pages/StockHomePage';
import StockYearPage from './pages/StockYearPage';
import StockListPage from './pages/StockListPage';
import StockNotFound from './pages/StockNotFound';
import AnnouncementNotFound from './pages/AnnouncementNotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ASX/stock-list" element={<StockListPage />} />
            <Route path="/ASX/:ticker" element={<StockHomePage />} />
            <Route path="/ASX/:ticker/:year" element={<StockYearPage />} />
            <Route path="/ASX/:ticker/announcement/:ID" element={<AnnouncementPage />} />
            <Route path="/not-listed" element={<StockNotFound />} />
            <Route path="/:ticker/announcement-not-found" element={<AnnouncementNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
