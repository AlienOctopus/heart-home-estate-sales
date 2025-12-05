import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { Icon } from './Icons';

export const StickyCTA: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the main hero content (approx 600px)
            setShow(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`
                fixed bottom-6 left-4 right-4 z-40 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
                ${show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
            `}
        >
            <div className="max-w-md mx-auto bg-olive/95 backdrop-blur-xl text-cream p-1.5 pl-5 rounded-full shadow-2xl flex items-center justify-between border border-white/10">
                <div className="flex flex-col">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">Next Sale</span>
                    <span className="font-display font-medium leading-none pb-0.5">{DATA.sale.dates[0].day} • {DATA.sale.dates[0].time}</span>
                </div>
                
                <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(DATA.sale.address.full)}`} 
                    target="_blank"
                    className="bg-cream text-olive px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
                >
                    Map <Icon name="right" s={14} />
                </a>
            </div>
        </div>
    );
};