import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from './Icons';

export const StickyCTA: React.FC = () => {
    const [show, setShow] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);
    const location = useLocation();
    const observerRef = useRef<IntersectionObserver | null>(null);

    const isHomePage = location.pathname === '/';
    const isSalesPage = location.pathname === '/sales';

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for footer detection (desktop only)
    useEffect(() => {
        // Only run on desktop
        if (typeof window === 'undefined' || window.innerWidth < 768) return;

        const footer = document.querySelector('footer');
        if (!footer) return;

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                setFooterVisible(entry.isIntersecting);
            },
            { threshold: 0, rootMargin: '0px 0px 100px 0px' }
        );

        observerRef.current.observe(footer);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [location.pathname]);

    if (location.pathname === '/alerts') return null;

    // Desktop: hide when footer is visible
    const desktopVisible = show && !footerVisible;

    return (
        <div
            className={`
                fixed left-4 right-4 z-40 transition-all duration-500 ease-out
                ${show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
            `}
            style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
        >
            {/* Mobile: Phone-first sticky bar (always shows based on scroll) */}
            <div className="md:hidden">
                <div className="bg-olive/95 backdrop-blur-xl text-cream p-2 rounded-2xl shadow-2xl border border-cream/20 flex gap-2">
                    <a
                        href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="flex-1 bg-cream text-olive py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors"
                    >
                        <Icon name="phone" s={18} />
                        Call Now
                    </a>
                    <a
                        href={`sms:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="flex-1 border-2 border-cream text-cream py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-cream/10 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Text
                    </a>
                </div>
            </div>

            {/* Desktop: Context-aware bar (hides when footer visible) */}
            <div
                className={`
                    hidden md:block transition-all duration-300 ease-out
                    ${desktopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
            >
                <div className="max-w-lg mx-auto bg-olive/95 backdrop-blur-xl text-cream p-2 pl-6 rounded-full shadow-2xl flex items-center justify-between border border-cream/20">
                    {isHomePage ? (
                        <>
                            <div className="flex flex-col">
                                <span className="font-mono text-[11px] uppercase tracking-widest text-sage">Free Consultation</span>
                                <span className="font-display text-lg font-medium leading-none pb-0.5">Talk to {DATA.config.owner}</span>
                            </div>
                            <a
                                href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                                className="bg-cream text-olive px-6 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
                            >
                                <Icon name="phone" s={16} />
                                {DATA.config.phone}
                            </a>
                        </>
                    ) : isSalesPage ? (
                        <>
                            <div className="flex flex-col">
                                <span className="font-mono text-[11px] uppercase tracking-widest text-sage">Next Sale</span>
                                <span className="font-display text-lg font-medium leading-none pb-0.5">{DATA.sale.dates[0].day} • {DATA.sale.dates[0].time}</span>
                            </div>
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(DATA.sale.address.full)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cream text-olive px-6 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
                            >
                                Get Directions <Icon name="right" s={16} />
                            </a>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
