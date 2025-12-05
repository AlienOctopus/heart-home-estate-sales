import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';
import { Gallery } from '../components/Gallery';
import { ShopperInfo } from '../components/ShopperInfo';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';

// Sales showcase page - editorial presentation for current sale

const generateICS = () => {
    const startDate = new Date(DATA.sale.saleDate);
    const endDate = new Date(startDate.getTime() + 8 * 60 * 60 * 1000);

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
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${DATA.sale.name.replace(/\s+/g, '-')}-estate-sale.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export const SalesPage: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0 });

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
        <main id="main-content" className="bg-cream min-h-screen text-olive font-body">
            {/* JSON-LD Structured Data */}
            <JsonLd includeFAQ={false} includeEvent={true} page="sales" />

            {/* Breadcrumb / Context */}
            <div className="pt-28 pb-4 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
                <div className="flex items-center gap-2 text-sm text-olive/50">
                    <Link to="/" className="hover:text-olive transition-colors">Heart & Home</Link>
                    <span>/</span>
                    <span className="text-olive">Current Sale</span>
                </div>
            </div>

            {/* Sale Hero - Clean editorial layout */}
            <section className="pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    {/* Typography Layer */}
                    <div className="relative z-20">
                        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-olive/10 bg-white/50 w-fit">
                            <span className="w-2 h-2 rounded-full bg-sage"></span>
                            <span className="font-mono text-xs tracking-widest uppercase text-olive">Upcoming Sale</span>
                        </div>

                        {/* Fixed scale typography - no vw units */}
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-olive mb-8">
                            <span className="block">{DATA.sale.name.split(' ').slice(0, -1).join(' ')}</span>
                            <span className="block text-sage italic">{DATA.sale.name.split(' ').slice(-1)}</span>
                        </h1>

                        <div className="max-w-lg mb-10">
                            <p className="text-xl md:text-2xl text-olive/70 leading-relaxed mb-6">
                                {DATA.sale.hook}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-olive/60">
                                <span className="flex items-center gap-2">
                                    <Icon name="pin" s={14} />
                                    {DATA.sale.address.city}
                                </span>
                                <span>•</span>
                                <span>{DATA.sale.dates[0].date} & {DATA.sale.dates[1]?.date}</span>
                                <span>•</span>
                                <span>{DATA.sale.counts.total}+ items</span>
                            </div>
                        </div>

                        {/* Countdown - Inline */}
                        <div className="bg-cream-dark rounded-sm p-6 mb-10 inline-block border border-olive/5">
                            <div className="font-mono text-xs uppercase tracking-widest text-olive/50 mb-2">Opens in</div>
                            <div className="flex items-baseline gap-1 font-display text-3xl text-olive tracking-tight">
                                <span className="tabular-nums">{timeLeft.d}</span>
                                <span className="text-sm mr-3 font-mono text-olive/40">days</span>
                                <span className="tabular-nums">{timeLeft.h}</span>
                                <span className="text-sm font-mono text-olive/40">hours</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(DATA.sale.address.full)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-olive text-cream px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-olive-muted transition-colors flex items-center gap-3 group"
                            >
                                Get Directions <Icon name="right" s={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                onClick={generateICS}
                                className="px-8 py-4 rounded-full border border-olive/20 hover:border-olive font-mono text-sm uppercase tracking-widest transition-colors text-olive"
                            >
                                Add to Calendar
                            </button>
                        </div>
                    </div>

                    {/* Visual Layer - Newsprint treatment, no parallax */}
                    <div className="relative hidden lg:block">
                        <div className="aspect-[4/5] rounded-sm overflow-hidden">
                            <img
                                src="/images/sale-in-progress.webp"
                                alt="Estate sale preview"
                                className="w-full h-full object-cover grayscale contrast-[0.92] brightness-[1.04] mix-blend-multiply opacity-90"
                                width={1376}
                                height={768}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <Gallery />

            {/* Shopper Info - How to Shop */}
            <ShopperInfo />

            {/* CTA for Families */}
            <section className="py-16 px-6 md:px-12 bg-cream-dark">
                <div className="max-w-[800px] mx-auto text-center">
                    <p className="text-olive/60 mb-4">Have a home that needs this kind of care?</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-olive font-display text-xl hover:text-sage transition-colors"
                    >
                        Learn about our estate sale services
                        <Icon name="right" s={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};
