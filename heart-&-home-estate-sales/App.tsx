import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { ShopperInfo } from './components/ShopperInfo';
import { SellerInfo } from './components/SellerInfo';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { TrustBar } from './components/TrustBar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <div className="bg-cream min-h-screen text-olive font-body relative selection:bg-olive selection:text-cream">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[9999] bg-noise mix-blend-multiply" />
        
        <Header />
        
        <main>
            <Hero />
            <TrustBar />
            <Gallery />
            <ShopperInfo />
            <About />
            <Testimonials />
            <SellerInfo />
        </main>

        <Footer />
        <StickyCTA />
    </div>
  );
}