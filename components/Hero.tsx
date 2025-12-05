import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { Icon } from './Icons';

const generateICS = () => {
    const startDate = new Date(DATA.sale.saleDate);
    const endDate = new Date(startDate.getTime() + 8 * 60 * 60 * 1000); // 8 hours later

    const formatDate = (date: Date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Heart & Home Estate Sales//EN
BEGIN:VEVENT
UID:${Date.now()}@heartandhomesales.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${DATA.sale.name} - Estate Sale
DESCRIPTION:${DATA.sale.hook}. ${DATA.sale.counts.total}+ items available.
LOCATION:${DATA.sale.address.full}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${DATA.sale.name.replace(/\s+/g, '-')}-estate-sale.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const Hero: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const calculateTime = () => {
            const diff = new Date(DATA.sale.saleDate).getTime() - new Date().getTime();
            if (diff > 0) {
                setTimeLeft({
                    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    m: Math.floor((diff / 1000 / 60) % 60)
                });
            }
        };
        calculateTime();
        const timer = setInterval(calculateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="sale" className="min-h-[110vh] pt-32 pb-20 px-4 md:px-12 flex flex-col justify-center relative overflow-hidden">
            
            {/* 2026 Trend: Fluid Gradients as "Aura" */}
            <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-sage/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-olive/5 rounded-full blur-[120px]" />

            <div className="max-w-[1600px] mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual Layer (Parallax) */}
                <div
                    className={`lg:col-span-6 lg:order-2 relative group perspective-1000 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                        loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`}
                >
                     {/* Floating Badge - Optical adjustment: thinner stroke, wider tracking */}
                     <div className="absolute -top-6 -right-6 z-30 md:block hidden">
                        <div className="relative w-36 h-36 animate-spin-slow">
                            <svg viewBox="0 0 100 100" width="144" height="144" className="fill-olive">
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text fontSize="10" fontWeight="500" letterSpacing="0.2em" fontFamily="DM Sans">
                                    <textPath href="#circlePath" startOffset="0%">
                                        HEART & HOME • ESTATE SERVICES •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>

                    <div 
                        className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-100 ease-out"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        <div className="absolute inset-0 bg-olive/10 mix-blend-multiply z-10 pointer-events-none" />
                        <img 
                            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200"
                            alt="Interior"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                        
                        {/* Countdown Pill - Floating on Image - BUMPED SIZE */}
                        <div className="absolute bottom-8 left-8 z-20 bg-cream/90 backdrop-blur-xl py-6 px-8 rounded-2xl shadow-lg border border-white/40">
                            <div className="text-xs font-medium uppercase tracking-widest text-olive-muted mb-2">Opens in</div>
                            <div className="flex items-baseline gap-1 font-display text-4xl text-olive leading-none tracking-tight">
                                <span className="tabular-nums">{timeLeft.d}</span><span className="text-sm mr-2 font-medium text-olive/50">D</span>
                                <span className="tabular-nums">{timeLeft.h}</span><span className="text-sm font-medium text-olive/50">H</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Typography Layer */}
                <div className="lg:col-span-6 lg:order-1 relative z-20 mix-blend-hard-light lg:mix-blend-normal">
                    <div
                        className={`inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border border-olive/10 bg-white/30 backdrop-blur-sm w-fit transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                    >
                        <span className="w-2 h-2 rounded-full bg-olive animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-olive">Upcoming Estate • {DATA.sale.dates[0].date}</span>
                    </div>

                    {/* Massive Display Type - Tighter Tracking for Editorial Look */}
                    <h1
                        className={`font-display text-[15vw] lg:text-[11rem] font-medium text-olive leading-none tracking-tighter mb-8 -ml-2 lg:-mr-32 relative z-30 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
                            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                    >
                        The <br/> 
                        <span className="italic text-sage/90 relative inline-block font-light">
                            Whitfield
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-sage" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span> <br/> 
                        Collection
                    </h1>

                    <div className="flex flex-col gap-10 relative z-30 pl-2 max-w-lg">
                        <p
                            className={`font-body text-xl md:text-3xl text-olive/80 leading-relaxed font-light transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
                                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        >
                            {DATA.sale.hook}
                        </p>

                        <div
                            className={`flex flex-wrap gap-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] ${
                                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        >
                            <a 
                                href={`https://maps.google.com/?q=${encodeURIComponent(DATA.sale.address.full)}`} 
                                target="_blank"
                                className="bg-olive text-cream px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-olive-muted transition-colors flex items-center gap-2 group"
                            >
                                Get Directions <Icon name="right" s={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                onClick={generateICS}
                                className="px-8 py-4 rounded-full border border-olive/20 hover:border-olive text-sm font-medium uppercase tracking-widest transition-colors text-olive"
                            >
                                Add to Calendar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};