import React from 'react';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';
import { TrustBar } from '../components/TrustBar';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';

// Families-focused homepage - conversion optimized
export const HomePage: React.FC = () => {
    return (
        <div className="bg-cream min-h-screen text-olive font-body">
            {/* JSON-LD Structured Data */}
            <JsonLd includeFAQ={true} includeEvent={true} />

            {/* Hero - The Pain Point */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    {/* Main headline - Fixed scale, no vw units */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.95] tracking-tighter text-olive mb-10 max-w-5xl">
                        <span className="block">For East Bay Families</span>
                        <span className="block">Who Just Inherited a</span>
                        <span className="block">House Full of <span className="text-sage italic">"Everything"</span></span>
                    </h1>

                    {/* The hook - emotional, specific - max-w-xl for proper line length */}
                    <div className="max-w-xl mb-16">
                        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-olive/90 leading-snug tracking-tight mb-8">
                            You shouldn't have to spend the next 6 weekends sorting through your mother's china.
                        </p>
                        <p className="text-lg md:text-xl text-olive/60 leading-relaxed">
                            You're grieving. You're exhausted. And now you're standing in a 3,200 sq. ft. house 
                            with 40 years of accumulated stuff—and somehow you're supposed to figure out what the 
                            Henredon dining set is worth, who wants the silver, and what to do with the 47 boxes 
                            in the garage labeled "miscellaneous."
                        </p>
                    </div>

                    {/* Scroll indicator - no animation */}
                    <div className="flex items-center gap-3 text-olive/40">
                        <div className="w-px h-12 bg-olive/20"></div>
                        <span className="font-mono text-xs uppercase tracking-widest">Keep reading</span>
                        <Icon name="down" s={16} />
                    </div>
                </div>
            </section>

            {/* The Permission Statement - increased padding */}
            <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-olive text-cream">
                <div className="max-w-[1000px] mx-auto text-center">
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-snug tracking-tight">
                        You don't have time for this.<br/>
                        <span className="text-cream/60">You shouldn't have to make time for this.</span>
                    </p>
                </div>
            </section>

            {/* Here's What Happens When You Call Us */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="mb-16">
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-olive mb-4">
                                Here's what happens<br/>
                                <span className="text-sage italic">when you call us:</span>
                            </h2>
                        </div>

                        <div className="space-y-0">
                            {[
                                {
                                    title: "We walk the house with you—once.",
                                    desc: "You tell us what you're keeping, what's going to family, what's off-limits. That's the last decision you have to make."
                                },
                                {
                                    title: "We price everything.",
                                    desc: "Furniture, jewelry, art, tools, the weird stuff in the attic. We've sold $4M+ in East Bay estates. We know what it's worth and who's buying."
                                },
                                {
                                    title: "We run the sale.",
                                    desc: "The strangers come to us, not you. You don't have to be there. You don't have to watch."
                                },
                                {
                                    title: "You get a check.",
                                    desc: "Detailed accounting of every item sold. No surprises. Most families are surprised—in a good way."
                                }
                            ].map((step, i) => (
                                <div key={i} className="group border-t border-olive/10 first:border-t-0 py-8 md:py-10">
                                    <div className="flex gap-4 md:gap-6">
                                        <span className="font-mono text-xl text-sage flex-shrink-0">→</span>
                                        <div>
                                            <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-olive tracking-tight mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-lg text-olive/60 leading-relaxed max-w-lg">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Editorial image anchor - newsprint treatment */}
                    <div className="hidden lg:block sticky top-32">
                        <div className="aspect-[4/5] rounded-sm overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200"
                                alt="Estate interior"
                                className="w-full h-full object-cover grayscale contrast-[0.92] brightness-[1.04] mix-blend-multiply opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Distinction */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-cream-dark">
                <div className="max-w-[900px] mx-auto">
                    <div className="space-y-8 text-lg md:text-xl text-olive/80 leading-relaxed">
                        <p>
                            <strong className="font-display text-2xl md:text-3xl text-olive block mb-4">
                                This is not a "clean-out" service.
                            </strong>
                            We don't haul your parents' life to a dump. We sell it—to collectors, dealers, 
                            and neighbors who'll value it.
                        </p>
                        <p>
                            The house empties. You get paid. And you never had to argue with your brother 
                            about the grandfather clock.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Area + Selectivity - simplified prose instead of pills */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-[900px] mx-auto">
                    <p className="text-lg md:text-xl text-olive/70 leading-relaxed mb-8">
                        We serve Blackhawk, Danville, Alamo, Walnut Creek, Brentwood, Pleasanton, 
                        Ruby Hill, and Livermore—and we're selective about the estates we take.
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-olive tracking-tight leading-snug">
                        If the house is worth doing right, we should talk.
                    </p>
                </div>
            </section>

            {/* Trust Bar */}
            <TrustBar />

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA - Phone First, No Forms */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-olive text-cream">
                <div className="max-w-[900px] mx-auto">
                    <div className="mb-12">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                            Call {DATA.config.owner} directly.
                        </h2>
                        <p className="text-xl md:text-2xl text-cream/70 leading-relaxed">
                            No voicemail maze. No "request a quote" form.<br/>
                            Just a conversation with someone who's done this 200+ times.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center justify-center gap-4 bg-cream text-olive px-10 py-6 rounded-full text-xl font-medium hover:bg-white transition-colors group"
                        >
                            <Icon name="phone" s={24} />
                            <span className="font-mono tracking-wide">{DATA.config.phone}</span>
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap items-center gap-8 text-sm text-cream/50">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Bonded & Insured
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Family-Owned
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Based in {DATA.config.baseCity}
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
