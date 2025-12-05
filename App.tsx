import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { StickyCTA } from './components/StickyCTA';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { SalesPage } from './pages/SalesPage';
import { AlertsPage } from './pages/AlertsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-cream min-h-screen text-olive font-body relative selection:bg-olive selection:text-cream">
        {/* Skip to main content - accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[9999] bg-noise mix-blend-multiply" />

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}