import React, { useState, useEffect, useRef } from 'react';
import { DATA } from '../constants';

export const Testimonials: React.FC = () => {
    const [active, setActive] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % DATA.testimonials.length);
        }, 6000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleDotClick = (index: number) => {
        setActive(index);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % DATA.testimonials.length);
        }, 6000);
    };

    return (
        <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-sage/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <span className="font-mono text-xs uppercase tracking-widest text-olive-muted">What Families Say</span>
                </div>

                {/* Quote Display */}
                <div className="relative min-h-[280px] md:min-h-[240px]">
                    {DATA.testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                active === i
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8 pointer-events-none'
                            }`}
                        >
                            {/* Large Quote Mark */}
                            <div className="text-[8rem] md:text-[10rem] font-display text-olive/5 leading-none select-none absolute -top-16 left-1/2 -translate-x-1/2">
                                "
                            </div>

                            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-olive leading-snug tracking-tight max-w-4xl mb-10 relative z-10">
                                "{t.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-olive text-cream flex items-center justify-center font-mono text-sm font-bold">
                                    {t.init}
                                </div>
                                <div className="text-left">
                                    <div className="font-display text-lg text-olive">{t.name}</div>
                                    <div className="font-mono text-xs text-olive-muted uppercase tracking-wider">{t.ctx}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {DATA.testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                active === i
                                    ? 'bg-olive w-8'
                                    : 'bg-olive/20 hover:bg-olive/40'
                            }`}
                            aria-label={`View testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
