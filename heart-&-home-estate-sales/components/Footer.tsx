import React from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-olive text-cream pt-24 pb-8 px-4 md:px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-24">
                    {/* Contact Info */}
                    <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Call {DATA.config.owner}</div>
                        <div className="space-y-3">
                            <a href={`tel:${DATA.config.phone.replace(/[^0-9]/g, '')}`} className="block font-display text-2xl hover:text-sage transition-colors">
                                {DATA.config.phone}
                            </a>
                            <a href={`mailto:${DATA.config.email}`} className="block text-cream/70 hover:text-sage transition-colors">
                                {DATA.config.email}
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Quick Links</div>
                        <div className="space-y-2">
                            <Link to="/" className="block text-cream/70 hover:text-cream transition-colors">Our Services</Link>
                            <Link to="/sales" className="block text-cream/70 hover:text-cream transition-colors">Current Sale</Link>
                            <Link to="/shop" className="block text-cream/70 hover:text-cream transition-colors">Shop Sales</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Find Us</div>
                        <div className="flex flex-wrap gap-2">
                            {/* Facebook - actual link */}
                            <a
                                href="https://www.facebook.com/people/Heart-Home-Estate-Sales/61584222547232/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors flex items-center justify-center"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            {/* Instagram - placeholder */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors flex items-center justify-center"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            {/* Yelp - placeholder */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors flex items-center justify-center"
                                aria-label="Yelp"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.86 3.017c.286.702-.04 1.471-.69 1.694h-.5zm-7.386-2.676L9.87 2.96c-.283-.79.507-1.552 1.296-1.263l.166.063a9.075 9.075 0 013.117 1.973c.526.525.533 1.372.034 1.922l-2.636 2.907c-.568.626-1.594.296-1.573-.644zM8.79 10.778l-5.09-1.66c-.757-.247-1.016-1.2-.49-1.804a9.166 9.166 0 012.724-2.167c.667-.364 1.51-.087 1.836.588l2.388 4.923c.408.843-.356 1.79-1.368 1.62v-.5zm-4.07 5.445a9.176 9.176 0 01-.473-3.49c.043-.765.858-1.282 1.572-1.015l5.002 1.873c.96.36.96 1.756 0 2.116l-5.002 1.873c-.714.267-1.529-.25-1.572-1.015a9.22 9.22 0 01.473-1.342zm7.054 5.028l-2.16-4.803c-.36-.8.356-1.668 1.196-1.448l5.09 1.33c.757.198 1.07 1.12.594 1.763a9.178 9.178 0 01-2.718 2.396c-.663.378-1.5.082-1.824-.582l-.178-.656z"/>
                                </svg>
                            </a>
                            {/* Nextdoor - placeholder */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors flex items-center justify-center"
                                aria-label="Nextdoor"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5h-2v-4.25c0-.69-.56-1.25-1.25-1.25h-.5c-.69 0-1.25.56-1.25 1.25v4.25h-2v-4.25c0-1.79 1.46-3.25 3.25-3.25h.5c1.79 0 3.25 1.46 3.25 3.25v4.25zm-3.5-7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Service Area */}
                    <div className="md:text-right">
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Service Area</div>
                        <div className="font-display text-xl mb-2">{DATA.config.areaShort || 'East Bay'}</div>
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

                {/* Footer Brand - Typography only, no competing logo */}
                <div className="border-b border-cream/10 mb-8 pb-12">
                    <div className="flex flex-col items-center">
                        {/* Simple heart accent */}
                        <svg className="w-8 h-8 text-sage/60 mb-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <h2 className="font-display text-[12vw] md:text-[10vw] leading-[0.85] tracking-tight text-center text-cream opacity-90 select-none">
                            HEART & HOME
                        </h2>
                        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-cream/40 mt-4">
                            Estate Sales
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-40">
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