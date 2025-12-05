import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';

// Shop page - email capture + upcoming sales for shoppers
export const ShopPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }

        // In production, this would submit to your email service
        // For now, simulate success
        try {
            // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
            setSubmitted(true);
            setError('');
        } catch {
            setError('Something went wrong. Try again?');
        }
    };

    return (
        <div className="bg-cream min-h-screen text-olive font-body">
            {/* JSON-LD Structured Data */}
            <JsonLd includeFAQ={false} includeEvent={true} page="shop" />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto">
                    <div className="mb-4">
                        <Link to="/" className="text-sm text-olive/50 hover:text-olive transition-colors">
                            ← Back to Heart & Home
                        </Link>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl tracking-tight text-olive mb-6">
                        Shop Our Sales
                    </h1>
                    <p className="text-xl md:text-2xl text-olive/70 font-light leading-relaxed max-w-2xl mb-12">
                        Find something worth keeping. Get notified when we announce new estate sales
                        in {DATA.config.areaShort || 'your area'}.
                    </p>

                    {/* Email Capture - Primary CTA */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-olive/5 max-w-xl mb-16">
                        {!submitted ? (
                            <>
                                <h2 className="font-display text-2xl text-olive mb-2">Get Sale Notifications</h2>
                                <p className="text-olive/60 mb-6">We'll email you when we announce upcoming sales. No spam, just treasures.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                            placeholder="your@email.com"
                                            className={`w-full px-6 py-4 rounded-xl border ${error ? 'border-red-400' : 'border-olive/10'} bg-cream focus:outline-none focus:border-olive transition-colors text-lg`}
                                        />
                                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-olive text-cream py-4 rounded-xl font-mono text-sm uppercase tracking-widest hover:bg-olive-muted transition-colors"
                                    >
                                        Notify Me
                                    </button>
                                </form>

                                <p className="text-xs text-olive/40 mt-4">
                                    Unsubscribe anytime. We respect your inbox.
                                </p>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="font-display text-2xl text-olive mb-2">You're on the list!</h3>
                                <p className="text-olive/60">We'll let you know when the next sale is announced.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Current/Upcoming Sale */}
            <section className="py-16 px-6 md:px-12 bg-cream-dark">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-olive/50 mb-8">Upcoming Sale</h2>

                    <Link
                        to="/sales"
                        className="block bg-white rounded-3xl p-8 md:p-12 border border-olive/5 hover:border-olive/20 transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 rounded-2xl overflow-hidden bg-cream">
                                <img
                                    src="/images/treasures-flatlay.jpg"
                                    alt={DATA.sale.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
                                    <span className="font-mono text-xs uppercase tracking-widest text-sage">Coming Up</span>
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
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="font-display text-4xl text-olive mb-12">Your First Estate Sale?</h2>

                    <div className="grid md:grid-cols-2 gap-8">
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
                            <div key={i} className="p-6 rounded-2xl border border-olive/10 hover:border-olive/20 transition-colors">
                                <h3 className="font-display text-xl text-olive mb-2">{item.title}</h3>
                                <p className="text-olive/60 font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-sell to Families */}
            <section className="py-16 px-6 md:px-12 bg-olive text-cream">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-display text-3xl md:text-4xl mb-4">Have a home that needs our help?</h2>
                    <p className="text-cream/70 mb-8">
                        We help families in {DATA.config.areaShort || DATA.config.area} transition with dignity.
                        Full-service estate sales, clean-outs, and more.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-cream text-olive px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
                    >
                        Learn About Our Services
                        <Icon name="right" s={16} />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};
