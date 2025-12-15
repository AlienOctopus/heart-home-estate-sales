import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';

// Alerts page - email capture + upcoming sales for shoppers
export const AlertsPage: React.FC = () => {
    const [zipCode, setZipCode] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, zipCode, name }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setSubmitted(true);
            setError('');
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Try again?');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main id="main-content" className="bg-cream min-h-screen text-olive font-body">
            {/* JSON-LD Structured Data */}
            <JsonLd includeFAQ={false} includeEvent={true} page="shop" />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-[600px] mx-auto text-center">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-olive mb-6">
                        Get Sale Alerts
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-olive/70 leading-relaxed mb-12">
                        Be the first to know when we announce new estate sales
                        in {DATA.config.areaShort || 'the East Bay'}.
                    </p>

                    {/* Email Capture - Primary CTA */}
                    <div className="bg-white rounded-sm p-8 md:p-10 border border-olive/5 text-left">
                        {!submitted ? (
                            <>
                                <p className="text-olive/60 mb-6">We'll email you when we announce upcoming sales. No spam, just treasures.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="md:col-span-1">
                                            <label htmlFor="zipCode" className="block text-xs font-bold text-olive/50 mb-2 uppercase tracking-widest">Zip Code</label>
                                            <input
                                                id="zipCode"
                                                name="postal-code"
                                                autoComplete="postal-code"
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={5}
                                                value={zipCode}
                                                onChange={(e) => { setZipCode(e.target.value.replace(/\D/g, '')); setError(''); }}
                                                placeholder="94513"
                                                className="w-full px-5 py-4 rounded-sm border border-olive/10 bg-cream focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive/20 transition-all text-lg placeholder:text-olive/20"
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="name" className="block text-xs font-bold text-olive/50 mb-2 uppercase tracking-widest">Full Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                autoComplete="name"
                                                type="text"
                                                value={name}
                                                onChange={(e) => { setName(e.target.value); setError(''); }}
                                                placeholder="Jane Doe"
                                                className="w-full px-5 py-4 rounded-sm border border-olive/10 bg-cream focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive/20 transition-all text-lg placeholder:text-olive/20"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-bold text-olive/50 mb-2 uppercase tracking-widest">Email Address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                            placeholder="jane@example.com"
                                            className={`w-full px-5 py-4 rounded-sm border ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-olive/10 bg-cream focus:border-olive focus:ring-olive/20'} focus:outline-none focus:ring-1 transition-all text-lg placeholder:text-olive/20`}
                                        />
                                        {error && <p className="text-red-500 text-sm mt-2 animate-pulse">{error}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading || submitted}
                                        className="w-full bg-olive text-cream py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-olive-muted active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isLoading ? (
                                            'Processing...'
                                        ) : (
                                            <>
                                                Notify Me <Icon name="right" s={14} />
                                            </>
                                        )}
                                    </button>
                                </form>

                                <p className="text-xs text-olive/40 mt-4">
                                    Unsubscribe anytime. We respect your inbox.
                                </p>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-sage/20 rounded-sm flex items-center justify-center mx-auto mb-4">
                                    <Icon name="check" s={32} className="text-sage" />
                                </div>
                                <h3 className="font-display text-2xl text-olive mb-2">You're on the list.</h3>
                                <p className="text-olive/60">We'll let you know when the next sale is announced.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Current/Upcoming Sale */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-cream-dark">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-xs font-medium uppercase tracking-widest text-olive/50 mb-8">Upcoming Sale</h2>

                    <Link
                        to="/sales"
                        className="block bg-white rounded-sm p-8 md:p-10 border border-olive/5 hover:border-olive/20 transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 rounded-sm overflow-hidden bg-cream">
                                <img
                                    src="/images/treasures-flatlay.webp"
                                    alt={DATA.sale.name}
                                    className="w-full h-full object-cover grayscale contrast-[0.92] brightness-[1.04] mix-blend-multiply opacity-90"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-sage"></span>
                                    <span className="text-xs font-medium uppercase tracking-widest text-sage">Coming Up</span>
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl text-olive mb-2 group-hover:text-sage transition-colors">
                                    {DATA.sale.name}
                                </h3>
                                <p className="text-olive/60 text-lg mb-4">{DATA.sale.hook}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-olive/50">
                                    <span>{DATA.sale.dates[0].date} & {DATA.sale.dates[1]?.date}</span>
                                    <span>•</span>
                                    <span>{DATA.sale.address.city}</span>
                                    <span>•</span>
                                    <span>{DATA.sale.counts.total}+ items</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <span className="inline-flex items-center gap-2 text-olive group-hover:text-sage transition-colors">
                                    View Sale <Icon name="right" s={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* How Shopping Works */}
            <section className="py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl text-olive mb-12">Your First Estate Sale?</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Arrive early for best selection",
                                desc: "Doors open at 8am. Serious shoppers line up by 7:30. If you want first pick on furniture or collectibles, arrive early."
                            },
                            {
                                title: "Everything is priced",
                                desc: "No haggling on day one. Sunday, most items are 25% off. Final hours? Make us a reasonable offer."
                            },
                            {
                                title: "Cash, card, or Venmo",
                                desc: "We accept all major cards, Apple Pay, and Venmo. Large items can be held until 5pm."
                            },
                            {
                                title: "Need delivery?",
                                desc: "We partner with local movers for same-day delivery. Flat $75 within 30 miles. Ask at checkout."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-sm border border-olive/10 hover:border-olive/20 transition-colors">
                                <h3 className="font-display text-xl text-olive mb-2">{item.title}</h3>
                                <p className="text-olive/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-sell to Families */}
            <section className="py-20 px-6 md:px-12 lg:px-20 bg-olive text-cream">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-display text-3xl md:text-4xl mb-4">Have a home that needs our help?</h2>
                    <p className="text-cream/60 mb-8 max-w-xl mx-auto">
                        We help families in {DATA.config.areaShort || DATA.config.area} transition with dignity.
                        Full-service estate sales, clean-outs, and more.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-cream text-olive px-8 py-4 rounded-full font-medium hover:bg-white transition-colors group"
                    >
                        Learn About Our Services
                        <Icon name="right" s={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};
