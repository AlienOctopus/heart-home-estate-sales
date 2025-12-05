import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from './Icons';

export const StickyCTA: React.FC = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    // Determine context: on homepage = show phone CTA, on sales page = show map CTA
    const isHomePage = location.pathname === '/';
    const isSalesPage = location.pathname === '/sales';

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Don't show on shop page (has its own conversion flow)
    if (location.pathname === '/shop') return null;

    return (
        <div
            className={`
                fixed left-4 right-4 z-40 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
                ${show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
            `}
            style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
        >
            {/* Mobile: Phone-first sticky bar */}
            <div className="md:hidden">
                <div className="bg-olive/95 backdrop-blur-xl text-cream p-2 rounded-2xl shadow-2xl border border-white/10 flex gap-2">
                    <a
                        href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="flex-1 bg-cream text-olive py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors"
                    >
                        <Icon name="phone" s={18} />
                        Call Now
                    </a>
                    <a
                        href={`sms:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="flex-1 bg-sage/20 text-cream py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sage/30 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Text
                    </a>
                </div>
            </div>

            {/* Desktop: Context-aware bar */}
            <div className="hidden md:block">
                <div className="max-w-lg mx-auto bg-olive/95 backdrop-blur-xl text-cream p-2 pl-6 rounded-full shadow-2xl flex items-center justify-between border border-white/10">
                    {isHomePage ? (
                        <>
                            <div className="flex flex-col">
                                <span className="font-mono text-xs uppercase tracking-widest opacity-60">Free Consultation</span>
                                <span className="font-display font-medium leading-none pb-0.5">Talk to {DATA.config.owner}</span>
                            </div>
                            <a
                                href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                                className="bg-cream text-olive px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
                            >
                                <Icon name="phone" s={14} />
                                {DATA.config.phone}
                            </a>
                        </>
                    ) : isSalesPage ? (
                        <>
                            <div className="flex flex-col">
                                <span className="font-mono text-xs uppercase tracking-widest opacity-60">Next Sale</span>
                                <span className="font-display font-medium leading-none pb-0.5">{DATA.sale.dates[0].day} • {DATA.sale.dates[0].time}</span>
                            </div>
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(DATA.sale.address.full)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cream text-olive px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
                            >
                                Get Directions <Icon name="right" s={14} />
                            </a>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};