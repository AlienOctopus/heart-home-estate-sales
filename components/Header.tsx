import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from './Icons';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Scroll to About section
    const scrollToAbout = () => {
        setMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollToAbout: true } });
        } else {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Logo click - scroll to top if on home page, otherwise navigate home
    const handleLogoClick = (e: React.MouseEvent) => {
        setMenuOpen(false);
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Handle scroll after navigation from another page
    useEffect(() => {
        if (location.state?.scrollToAbout && location.pathname === '/') {
            setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <>
            {/* The "Island" Header */}
            <header
                className={`
                    fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                `}
            >
                <div
                    className={`
                        pointer-events-auto flex items-center justify-between
                        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        rounded-full border
                        ${menuOpen
                            ? 'w-[calc(100%-1.5rem)] md:w-auto bg-olive/95 backdrop-blur-xl border-cream/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] py-2.5 md:py-3 px-3 md:px-5'
                            : scrolled
                                ? 'w-[calc(100%-1.5rem)] md:w-auto bg-cream/95 backdrop-blur-xl border-olive/[0.08] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] py-2.5 md:py-3 px-3 md:px-5'
                                : 'w-full max-w-[1500px] px-6 md:px-12 py-6 bg-transparent border-transparent shadow-none'
                        }
                    `}
                >
                    {/* Logo */}
                    <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
                        <div className={`relative transition-all duration-300 ${scrolled ? 'w-9 h-9' : 'w-11 h-11'} rounded-full overflow-hidden`}>
                            <img
                                src="/images/logo-badge.webp"
                                alt="Heart & Home Estate Sales"
                                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${menuOpen ? '' : 'mix-blend-multiply'}`}
                                width={800}
                                height={800}
                            />
                        </div>
                        <div className={`flex flex-col leading-none transition-all duration-300 ${scrolled ? 'gap-0' : 'gap-0.5'}`}>
                            <span className={`font-display font-semibold transition-all duration-300 ${scrolled ? 'text-[15px] md:text-base' : 'text-lg md:text-xl'} ${menuOpen ? 'text-cream' : 'text-olive'}`}>
                                Heart & Home
                            </span>
                            <span className={`font-mono uppercase tracking-[0.2em] transition-all duration-300 ${scrolled ? 'text-[7px] md:text-[8px]' : 'text-[9px] md:text-[10px]'} ${menuOpen ? 'text-cream/60' : 'text-olive/40'}`}>
                                Estate Sales
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        <button
                            onClick={scrollToAbout}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-olive/60 hover:text-olive hover:bg-olive/[0.04]"
                        >
                            About
                        </button>
                        <Link
                            to="/sales"
                            className={`
                                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                ${location.pathname === '/sales'
                                    ? 'text-olive bg-olive/[0.06]'
                                    : 'text-olive/60 hover:text-olive hover:bg-olive/[0.04]'
                                }
                            `}
                        >
                            Current Sale
                        </Link>

                        {/* Separator */}
                        <div className={`h-5 w-px bg-olive/10 mx-2 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-60'}`} />

                        {/* Sale Alerts - Accent CTA for shoppers */}
                        <Link
                            to="/shop"
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                ${location.pathname === '/shop'
                                    ? 'bg-sage/15 text-sage'
                                    : 'text-olive/60 hover:text-sage hover:bg-sage/[0.06]'
                                }
                            `}
                        >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                            <span>Sale Alerts</span>
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        {/* Phone CTA - Desktop */}
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className={`
                                hidden md:flex items-center gap-2 rounded-full text-sm font-medium transition-all duration-300
                                ${scrolled
                                    ? 'bg-olive text-cream hover:bg-olive-muted px-4 py-2'
                                    : 'bg-olive text-cream hover:bg-olive-muted px-5 py-2.5 shadow-sm'
                                }
                            `}
                        >
                            <Icon name="phone" s={14} />
                            <span className="font-mono text-xs tracking-tight">{DATA.config.phone}</span>
                        </a>

                        {/* Mobile Phone Button - WCAG 2.5.5: 44px minimum touch target */}
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className={`
                                md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300
                                ${menuOpen
                                    ? 'bg-cream/20 text-cream'
                                    : 'bg-olive text-cream shadow-sm'
                                }
                            `}
                            aria-label="Call us"
                        >
                            <Icon name="phone" s={18} />
                        </a>

                        {/* Mobile Toggle - WCAG 2.5.5: 44px minimum touch target */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`
                                md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300
                                ${menuOpen
                                    ? 'bg-cream/20 text-cream hover:bg-cream/30'
                                    : scrolled
                                        ? 'bg-olive/10 text-olive hover:bg-olive/20'
                                        : 'text-olive hover:bg-white/50'
                                }
                            `}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                        >
                            <Icon name={menuOpen ? 'x' : 'menu'} s={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu Curtain */}
            <div
                className={`
                    fixed inset-0 z-40 bg-olive text-cream transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
                `}
                style={{
                    clipPath: menuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)'
                }}
            >
                {/* Background Noise */}
                <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />

                <div className="h-full flex flex-col justify-center px-8 relative z-10 max-w-4xl mx-auto">
                    <nav className="flex flex-col gap-4">
                        <Link
                            to="/"
                            className={`
                                text-left font-display text-4xl sm:text-5xl md:text-6xl font-light
                                transition-all duration-300 opacity-0 animate-fade-up
                                ${location.pathname === '/' ? 'text-cream' : 'text-cream/70 hover:text-sage'}
                            `}
                            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                        >
                            Home
                        </Link>
                        <button
                            onClick={scrollToAbout}
                            className="text-left font-display text-4xl sm:text-5xl md:text-6xl font-light transition-all duration-300 opacity-0 animate-fade-up text-cream/70 hover:text-sage"
                            style={{ animationDelay: '280ms', animationFillMode: 'forwards' }}
                        >
                            About
                        </button>
                        <Link
                            to="/sales"
                            className={`
                                text-left font-display text-4xl sm:text-5xl md:text-6xl font-light
                                transition-all duration-300 opacity-0 animate-fade-up
                                ${location.pathname === '/sales' ? 'text-cream' : 'text-cream/70 hover:text-sage'}
                            `}
                            style={{ animationDelay: '360ms', animationFillMode: 'forwards' }}
                        >
                            Current Sale
                        </Link>
                        <Link
                            to="/shop"
                            className="text-left font-display text-4xl sm:text-5xl md:text-6xl font-light transition-all duration-300 opacity-0 animate-fade-up text-sage hover:text-sage-light"
                            style={{ animationDelay: '440ms', animationFillMode: 'forwards' }}
                        >
                            Sale Alerts
                        </Link>
                    </nav>

                    {/* Contact Info in Menu */}
                    <div className="mt-16 pt-12 border-t border-cream/10 opacity-0 animate-fade-up" style={{ animationDelay: '520ms', animationFillMode: 'forwards' }}>
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className="flex items-center gap-4 mb-8 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center group-hover:bg-sage/30 transition-colors">
                                <Icon name="phone" s={20} />
                            </div>
                            <div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50 mb-1">Call {DATA.config.owner}</div>
                                <div className="text-2xl font-display group-hover:text-sage transition-colors">{DATA.config.phone}</div>
                            </div>
                        </a>

                        <div className="grid grid-cols-1 gap-6 text-sm">
                            <div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40 mb-2">Email</div>
                                <a href={`mailto:${DATA.config.email}`} className="font-display text-cream/80 hover:text-sage transition-colors break-all">
                                    {DATA.config.email}
                                </a>
                            </div>
                            <div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40 mb-2">Service Area</div>
                                <div className="font-display text-cream/80">{DATA.config.areaShort || DATA.config.area}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
