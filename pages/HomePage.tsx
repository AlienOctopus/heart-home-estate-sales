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
        <main id="main-content" className="bg-cream min-h-screen text-olive font-body">
            {/* JSON-LD Structured Data */}
            <JsonLd includeFAQ={true} includeEvent={true} />

            {/* Hero - The Pain Point */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 relative overflow-hidden">
                {/* Hero Image - Desktop: floating right with editorial fade */}
                <div className="absolute top-24 right-0 w-[42%] h-[80vh] hidden lg:block pointer-events-none select-none">
                    <div className="relative w-full h-full">
                        {/* Left edge fade into cream background */}
                        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10" />
                        <img
                            src="/images/treasures-flatlay.webp"
                            alt="Treasured heirlooms - vintage teacups, silver, handwritten letters"
                            className="w-full h-full object-cover object-center opacity-90"
                            style={{ filter: 'grayscale(0.25) contrast(0.96) brightness(1.02)' }}
                            width={1024}
                            height={1024}
                        />
                        {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream via-cream/70 to-transparent z-10" />
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    {/* Main headline - Fixed scale, no vw units */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.95] tracking-tighter text-olive mb-10 max-w-4xl">
                        <span className="block">For East Bay Families</span>
                        <span className="block">Who Just Inherited</span>
                        <span className="block">a House Full of <span className="text-sage italic">"Everything"</span></span>
                    </h1>

                    {/* Mobile hero image - landscape version, full bleed */}
                    <div className="lg:hidden mb-10 -mx-6 md:-mx-12">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src="/images/treasures-flatlay.webp"
                                alt="Treasured heirlooms - vintage teacups, silver, handwritten letters"
                                className="w-full h-full object-cover object-center"
                                style={{ filter: 'grayscale(0.25) contrast(0.96) brightness(1.02)' }}
                                width={1024}
                                height={1024}
                                loading="lazy"
                            />
                            {/* Bottom fade into content */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent" />
                        </div>
                    </div>

                    {/* The hook - emotional, specific */}
                    <div className="max-w-xl mb-16">
                        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-olive/90 leading-snug tracking-tight mb-8">
                            You shouldn't have to spend the next 6 weekends sorting through your mother's china.
                        </p>
                        <p className="text-lg md:text-xl text-olive/60 leading-relaxed mb-8">
                            You're grieving. You're exhausted. And now you're standing in a 3,200 sq. ft. house
                            with 40 years of accumulated stuff—and somehow you're supposed to figure out what the
                            Henredon dining set is worth, who wants the silver, and what to do with the 47 boxes
                            in the garage labeled "miscellaneous."
                        </p>
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center gap-3 bg-olive text-cream px-8 py-4 rounded-full font-medium hover:bg-olive-muted transition-colors group"
                        >
                            <Icon name="phone" s={18} />
                            <span className="font-mono tracking-wide">{DATA.config.phone}</span>
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <button
                        onClick={() => document.getElementById('permission')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-3 text-olive/40 hover:text-olive/60 transition-colors cursor-pointer"
                    >
                        <div className="w-px h-12 bg-olive/20"></div>
                        <span className="font-mono text-xs uppercase tracking-widest">Keep reading</span>
                        <Icon name="down" s={16} />
                    </button>
                </div>
            </section>

            {/* The Permission Statement - increased padding */}
            <section id="permission" className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-olive text-cream scroll-mt-16">
                <div className="max-w-[1000px] mx-auto text-center">
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-snug tracking-tight mb-10">
                        Your family's legacy deserves expertise—<br/>
                        <span className="text-cream/60">not a crash course in estate liquidation.</span>
                    </p>
                    <a
                        href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="inline-flex items-center gap-3 text-sage hover:text-cream transition-colors"
                    >
                        <span className="font-mono text-sm uppercase tracking-widest">Free Consultation</span>
                        <span className="font-display text-xl">{DATA.config.phone}</span>
                    </a>
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
                                width={1200}
                                height={1500}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About - Meet Shauna */}
            <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 scroll-mt-24">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-sm overflow-hidden">
                                <img
                                    src="/images/shauna.webp"
                                    alt={`${DATA.config.owner} - ${DATA.config.legalName}`}
                                    className="w-full h-full object-cover grayscale contrast-[0.92] brightness-[1.04] mix-blend-multiply opacity-90"
                                    width={1696}
                                    height={2528}
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-sm p-4 shadow-lg border border-olive/5">
                                <p className="font-display text-lg text-olive">Hi, I'm {DATA.config.owner}.</p>
                                <p className="font-mono text-xs text-olive/60 uppercase tracking-wider">Owner & Founder</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-olive mb-6">
                                You shouldn't have to<br/>
                                <span className="text-sage italic">do this alone.</span>
                            </h2>
                            <div className="space-y-4 text-lg text-olive/70 leading-relaxed mb-8">
                                <p>
                                    Whether you're settling an estate, downsizing, or helping a parent transition—
                                    the to-do list is endless. Price everything. Photograph everything.
                                    Let strangers walk through. Answer a hundred questions.
                                </p>
                                <p>
                                    <strong className="text-olive font-medium">That's our job, not yours.</strong>
                                </p>
                            </div>
                            <div className="bg-cream-dark rounded-sm p-8 md:p-10 border border-olive/5">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-sage mb-6">What We Handle</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Sorting, organizing, and staging the entire home",
                                        "Researching and pricing every item fairly",
                                        "Professional photography and marketing",
                                        "Managing the sale—all the people, all the questions",
                                        "Clean-out and donation coordination after",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-olive/80">
                                            <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Distinction */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-cream-dark">
                <div className="max-w-[900px] mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
                        {/* Logo Badge - Editorial Seal */}
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg ring-1 ring-olive/10">
                                <img
                                    src="/images/logo-badge.webp"
                                    alt="Heart & Home Estate Sales"
                                    className="w-full h-full object-cover"
                                    width={800}
                                    height={800}
                                    loading="lazy"
                                />
                            </div>
                        </div>

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
                </div>
            </section>

            {/* Service Area + Selectivity - simplified prose instead of pills */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-[900px] mx-auto">
                    <p className="text-lg md:text-xl text-olive/70 leading-relaxed mb-8">
                        We serve <span className="font-medium text-olive">Blackhawk</span>, <span className="font-medium text-olive">Danville</span>, <span className="font-medium text-olive">Alamo</span>, <span className="font-medium text-olive">Walnut Creek</span>, <span className="font-medium text-olive">Brentwood</span>, <span className="font-medium text-olive">Pleasanton</span>, <span className="font-medium text-olive">Ruby Hill</span>, and <span className="font-medium text-olive">Livermore</span>—and we're selective about the estates we take.
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
                            No phone tag. No "request a quote" form.<br/>
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
        </main>
    );
};
