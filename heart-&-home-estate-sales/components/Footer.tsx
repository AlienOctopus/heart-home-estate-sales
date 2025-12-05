import React from 'react';
import { DATA } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-olive text-cream pt-24 pb-8 px-4 md:px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-24">
                    {/* Contact Info */}
                    <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Get in Touch</div>
                        <div className="space-y-3">
                            <a href={`tel:${DATA.config.phone.replace(/[^0-9]/g, '')}`} className="block font-display text-xl hover:text-sage transition-colors">
                                {DATA.config.phone}
                            </a>
                            <a href={`mailto:${DATA.config.email}`} className="block font-display text-lg hover:text-sage transition-colors">
                                {DATA.config.email}
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Follow Along</div>
                        <div className="flex gap-3">
                            <a href={DATA.config.instagramUrl} target="_blank" className="px-5 py-2 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors font-mono text-xs uppercase tracking-wider">
                                Instagram
                            </a>
                            <a href="#" className="px-5 py-2 rounded-full border border-cream/20 hover:bg-cream hover:text-olive transition-colors font-mono text-xs uppercase tracking-wider">
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Service Area */}
                    <div className="md:text-right">
                        <div className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-4">Service Area</div>
                        <div className="font-display text-xl">{DATA.config.area}</div>
                    </div>
                </div>

                {/* Massive Footer Text */}
                <div className="border-b border-cream/10 mb-8">
                    <h1 className="font-display text-[12.5vw] leading-[0.8] tracking-tight text-center text-cream opacity-90 select-none">
                        HEART & HOME
                    </h1>
                </div>

                <div className="flex justify-between items-end text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-40">
                    <div>
                        © {new Date().getFullYear()} Heart & Home Sales
                    </div>
                    <div className="text-right">
                        Site by 2026 Agency <br/>
                        Springfield, MO
                    </div>
                </div>
            </div>
        </footer>
    );
};