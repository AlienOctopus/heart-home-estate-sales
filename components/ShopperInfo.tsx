import React, { useState } from 'react';
import { DATA } from '../constants';

export const ShopperInfo: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <section id="shoppers" className="py-32 bg-cream-dark relative">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                
                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-xl">
                        <h2 className="font-display text-5xl md:text-7xl mb-6 text-olive tracking-tighter">The Hunt</h2>
                        <p className="text-xl md:text-2xl text-olive/70 font-light leading-relaxed">
                            Estate sales operate differently than retail. Here is the playbook for securing your treasures.
                        </p>
                    </div>
                    <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-olive-muted">
                        Process & Etiquette
                    </div>
                </div>

                {/* 2026 Trend: Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-24">
                    
                    {/* Card 1: Arrival (Large) */}
                    <div className="md:col-span-6 lg:col-span-7 bg-cream p-10 md:p-14 rounded-[2.5rem] border-optical relative overflow-hidden group">
                        {/* Extreme Typography: Giant Number */}
                        <div className="absolute -top-10 -right-4 p-8 opacity-5 font-display text-[14rem] leading-none group-hover:scale-105 transition-transform duration-700 select-none">1</div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="font-mono text-xs text-sage mb-6 uppercase tracking-widest">01 • The Arrival</div>
                                <h3 className="font-display text-4xl md:text-5xl text-olive mb-6 tracking-tight">The Early Bird Gets the Worm</h3>
                                <p className="text-olive/70 leading-relaxed max-w-md font-light text-lg">
                                    Doors open strictly at 8am. Regulars line up as early as 7:30am. If you are hunting for a specific high-value item, we recommend arriving early to secure your spot in line.
                                </p>
                            </div>
                            <div className="mt-12 flex gap-3">
                                <span className="px-5 py-2 bg-olive/5 rounded-full text-xs font-mono text-olive-muted uppercase tracking-wider">Coffee Recommended</span>
                                <span className="px-5 py-2 bg-olive/5 rounded-full text-xs font-mono text-olive-muted uppercase tracking-wider">No Numbers</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Pricing (Tall) */}
                    <div className="md:col-span-3 lg:col-span-5 bg-olive text-cream p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group">
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sage/20 rounded-full blur-[50px] group-hover:bg-sage/30 transition-colors" />
                        <div>
                            <div className="font-mono text-xs text-sage mb-6 uppercase tracking-widest">02 • Pricing Strategy</div>
                            <h3 className="font-display text-4xl md:text-5xl text-cream mb-8 tracking-tight">Dynamic Pricing</h3>
                            <ul className="space-y-6 font-light text-cream/80">
                                <li className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-display text-xl">Saturday</span>
                                    <span className="font-mono text-xs uppercase tracking-widest text-white mt-1">Full Price</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-display text-xl">Sunday Morning</span>
                                    <span className="font-mono text-xs uppercase tracking-widest text-white mt-1">25% Off</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-display text-xl">Sunday Afternoon</span>
                                    <span className="font-mono text-xs uppercase tracking-widest text-white mt-1">Make Offer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Payments (Small) */}
                    <div className="md:col-span-3 lg:col-span-4 bg-sage/20 p-10 rounded-[2.5rem] border border-sage/10 flex flex-col justify-center items-center text-center">
                        <div className="font-mono text-xs text-olive-muted mb-4 uppercase tracking-widest">03 • Checkout</div>
                        <h3 className="font-display text-3xl text-olive mb-2 tracking-tight">Cash & Card</h3>
                        <p className="text-base text-olive/70 mb-6 font-light">We accept all major cards, Apple Pay, and Venmo.</p>
                        <div className="flex gap-3 opacity-40">
                            <div className="w-10 h-6 bg-olive rounded-sm" />
                            <div className="w-10 h-6 bg-olive rounded-sm" />
                            <div className="w-10 h-6 bg-olive rounded-sm" />
                        </div>
                    </div>

                    {/* Card 4: Delivery (Wide) */}
                    <div className="md:col-span-3 lg:col-span-8 bg-white p-10 md:p-14 rounded-[2.5rem] border-optical flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="font-mono text-xs text-sage mb-4 uppercase tracking-widest">04 • Logistics</div>
                            <h3 className="font-display text-3xl text-olive mb-4 tracking-tight">Heavy Lifting?</h3>
                            <p className="text-olive/70 leading-relaxed text-lg font-light">
                                We partner with "Two Men & A Truck" for same-day local delivery starting at a flat rate of $75. Ask at the checkout desk.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-cream-dark flex items-center justify-center text-4xl">
                            🚛
                        </div>
                    </div>
                </div>

                {/* Integrated FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-center text-olive-muted mb-10">Quick Answers</h3>
                    <div className="space-y-4">
                        {DATA.faqs.map((f, i) => (
                            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-black/5">
                                <button 
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-8 text-left hover:bg-cream/50 transition-colors group"
                                >
                                    <span className="font-display text-xl md:text-2xl text-olive group-hover:text-sage transition-colors">{f.q}</span>
                                    <span className={`text-sage transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''} text-2xl`}>+</span>
                                </button>
                                <div className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === i ? 'max-h-40 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-olive/70 text-lg font-light leading-relaxed pl-6 border-l-2 border-sage/30">
                                        {f.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};