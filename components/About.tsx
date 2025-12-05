import React from 'react';
import { DATA } from '../constants';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-32 md:py-48 bg-cream overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4">
                
                <div className="grid md:grid-cols-12 gap-16 items-center">
                    
                    {/* Visual: The Scrapbook Effect */}
                    <div className="md:col-span-5 relative">
                        <div className="relative w-full aspect-[4/5] rotate-[-3deg] transition-transform duration-500 hover:rotate-0 z-10">
                            <div className="absolute inset-0 bg-white p-3 shadow-2xl rounded-sm">
                                <img 
                                    src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800" 
                                    alt="Sarah, Owner" 
                                    className="w-full h-full object-cover grayscale-[20%]"
                                />
                            </div>
                            {/* Tape Effect */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm" />
                        </div>
                        
                        {/* Second Photo (Background) */}
                        <div className="absolute top-12 -right-8 w-2/3 aspect-square rotate-[6deg] z-0 opacity-80">
                            <div className="absolute inset-0 bg-white p-2 shadow-xl rounded-sm">
                                <img 
                                    src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600" 
                                    alt="Detail" 
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text: The Personal Letter */}
                    <div className="md:col-span-7 md:pl-16 relative">
                        {/* Giant Quote Mark as Texture */}
                        <div className="absolute -left-12 -top-12 text-[12rem] font-display text-olive/5 leading-none select-none z-0">
                            "
                        </div>
                        
                        <div className="relative z-10">
                            <div className="font-mono text-xs uppercase tracking-widest text-sage mb-8">A Note from the Owner</div>
                            
                            <h2 className="font-display text-5xl md:text-7xl text-olive mb-10 leading-none tracking-tight">
                                This isn't just business.<br/>
                                <span className="italic text-olive-muted font-light">It's personal history.</span>
                            </h2>

                            {/* Drop Cap styling for the first paragraph */}
                            <div className="space-y-8 text-xl text-olive/80 font-light leading-relaxed">
                                <p className="first-letter:float-left first-letter:text-6xl first-letter:pr-4 first-letter:font-display first-letter:text-olive first-letter:leading-[0.8]">
                                    Hi, I'm {DATA.config.owner}. I started Heart & Home after handling my own grandmother's estate in 2018. I remember the overwhelming feeling of standing in a living room full of 58 years of memories, wondering what to keep, what to sell, and how to honor her life.
                                </p>
                                <p>
                                    That experience changed me. I realized that families don't just need a salesperson—they need a guide.
                                </p>
                                <p>
                                    I live right here in Springfield with my husband and our golden retriever. When you hire us, you don't get a corporate team; you get me, my clipboard, and a promise to treat your home with the same reverence I treated my grandmother's.
                                </p>
                            </div>

                            <div className="mt-16 flex items-center gap-6">
                                <div className="font-display italic text-4xl text-olive tracking-tight">Sarah Jenkins</div>
                                <div className="h-px w-24 bg-olive/10" />
                                <div className="font-mono text-xs text-olive-muted uppercase tracking-widest">
                                    {DATA.config.creds}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};