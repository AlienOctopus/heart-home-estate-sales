import React from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-olive text-cream pt-16 md:pt-24 pb-8 px-6 md:px-8 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
                    {/* Contact Info - Full width on mobile */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-cream/50 mb-3 md:mb-4">Call {DATA.config.owner}</div>
                        <div className="space-y-2 md:space-y-3">
                            <a href={`tel:${DATA.config.phone.replace(/[^0-9]/g, '')}`} className="block font-display text-xl md:text-2xl hover:text-sage transition-colors">
                                {DATA.config.phone}
                            </a>
                            <a href={`mailto:${DATA.config.email}`} className="block text-sm md:text-base text-cream/70 hover:text-sage transition-colors break-all">
                                {DATA.config.email}
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-cream/50 mb-3 md:mb-4">Quick Links</div>
                        <div className="space-y-2">
                            <Link to="/" className="block text-sm md:text-base text-cream/70 hover:text-cream transition-colors py-1">Our Services</Link>
                            <Link to="/sales" className="block text-sm md:text-base text-cream/70 hover:text-cream transition-colors py-1">Current Sale</Link>
                            <Link to="/alerts" className="block text-sm md:text-base text-cream/70 hover:text-cream transition-colors py-1">Sale Alerts</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-cream/50 mb-3 md:mb-4">Find Us</div>
                        <div className="flex flex-wrap gap-2">
                            {/* Facebook - actual link */}
                            <a
                                href="https://www.facebook.com/people/Heart-Home-Estate-Sales/61584222547232/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors flex items-center justify-center"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Service Area */}
                    <div className="col-span-2 md:col-span-1 md:text-right">
                        <div className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-cream/50 mb-3 md:mb-4">Service Area</div>
                        <div className="font-display text-lg md:text-xl mb-2">{DATA.config.areaShort || 'East Bay'}</div>
                        <div className="text-sm text-cream/60 leading-relaxed">
                            Brentwood • Pleasanton<br/>
                            Walnut Creek • Surrounding Areas
                        </div>
                    </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm text-cream/50">
                    <span>{DATA.config.creds}</span>
                </div>

                {/* Footer Brand - Compact, elegant */}
                <div className="border-b border-cream/10 mb-8 pb-8">
                    <div className="flex flex-col items-center">
                        <svg className="w-4 h-4 text-sage/60 mb-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <h2 className="font-display text-2xl md:text-3xl tracking-tight text-center text-cream/90">
                            Heart & Home
                        </h2>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/40 mt-1">
                            Estate Sales
                        </p>
                        {DATA.config.tagline && (
                            <p className="font-display text-sm text-cream/50 italic mt-3">
                                {DATA.config.tagline}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-widest opacity-40">
                    <div>
                        © {new Date().getFullYear()} Heart & Home Estate Sales
                    </div>
                    <div className="text-center md:text-right">
                        Based in {DATA.config.baseCity}
                    </div>
                </div>
            </div>
        </footer>
    );
};