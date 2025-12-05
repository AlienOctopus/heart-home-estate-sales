import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { StickyCTA } from './components/StickyCTA';
import { HomePage } from './pages/HomePage';
import { SalesPage } from './pages/SalesPage';
import { ShopPage } from './pages/ShopPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-cream min-h-screen text-olive font-body relative selection:bg-olive selection:text-cream">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[9999] bg-noise mix-blend-multiply" />

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>

        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}