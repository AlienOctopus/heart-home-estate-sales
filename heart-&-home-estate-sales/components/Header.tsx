import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { Icon } from './Icons';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* The "Island" Header */}
            <header 
                className={`
                    fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                `}
            >
                <div 
                    className={`
                        pointer-events-auto flex items-center justify-between gap-8
                        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${scrolled 
                            ? 'w-[calc(100%-2rem)] md:w-auto bg-cream/90 backdrop-blur-xl border border-white/40 shadow-xl shadow-olive/5 rounded-full py-4 px-6 md:px-8' 
                            : 'w-full max-w-[1500px] px-6 md:px-12 py-6 bg-transparent'
                        }
                    `}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-olive text-cream rounded-full flex items-center justify-center text-xl md:text-2xl relative overflow-hidden">
                            <span className="relative z-10">H</span>
                            <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className={`font-display font-bold text-olive transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                            Heart & Home
                        </span>
                    </a>
                    
                    {/* Desktop Nav */}
                    <nav className={`hidden md:flex items-center gap-10 transition-opacity duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                        {['Sale', 'Gallery', 'Process', 'About'].map((item) => (
                            <button 
                                key={item}
                                onClick={() => scrollTo(`#${item.toLowerCase() === 'process' ? 'families' : item.toLowerCase()}`)} 
                                className="text-base font-medium text-olive/80 hover:text-olive transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-olive after:transition-all hover:after:w-full"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* CTA - Larger */}
                        <button 
                            onClick={() => scrollTo('#families')}
                            className={`
                                px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300
                                ${scrolled 
                                    ? 'bg-olive text-cream hover:bg-olive-muted' 
                                    : 'bg-white/90 hover:bg-white text-olive backdrop-blur-sm shadow-sm'
                                }
                            `}
                        >
                            Contact
                        </button>

                        {/* Mobile Toggle */}
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="md:hidden p-3 text-olive hover:bg-olive/5 rounded-full transition-colors" 
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                {menuOpen ? <Icon name="x" s={24} /> : <Icon name="menu" s={24} />}
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu Curtain */}
            <div 
                className={`
                    fixed inset-0 z-40 bg-olive text-cream transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${menuOpen ? 'clip-path-open pointer-events-auto' : 'clip-path-closed pointer-events-none'}
                `}
                style={{
                    clipPath: menuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)'
                }}
            >
                {/* Background Noise on Menu */}
                <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

                <div className="h-full flex flex-col justify-center px-8 relative z-10 max-w-4xl mx-auto">
                    <nav className="flex flex-col gap-8">
                        {[
                            ['Current Sale', '#sale'],
                            ['Property Contents', '#gallery'],
                            ['How It Works', '#shoppers'],
                            ['Contact Us', '#families']
                        ].map(([label, id], i) => (
                            <button 
                                key={id} 
                                onClick={() => scrollTo(id)} 
                                className="text-left font-display text-5xl md:text-8xl font-light hover:text-sage transition-colors duration-300 opacity-0 animate-fade-up"
                                style={{ animationDelay: `${200 + (i * 100)}ms`, animationFillMode: 'forwards' }}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                    
                    <div className="mt-16 pt-16 border-t border-cream/10 grid grid-cols-2 gap-12 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                        <div>
                            <div className="font-mono text-xs uppercase tracking-widest text-sage mb-3">Email</div>
                            <div className="text-xl md:text-2xl font-display">{DATA.config.email}</div>
                        </div>
                        <div>
                            <div className="font-mono text-xs uppercase tracking-widest text-sage mb-3">Social</div>
                            <div className="text-xl md:text-2xl font-display">@heartandhome</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};