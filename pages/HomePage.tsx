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
            <section className="min-h-screen flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 pt-32 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
                {/* Hero Image - Desktop: full-bleed right with gradient dissolution */}
                <div className="absolute top-32 right-0 w-[50%] h-[75vh] hidden lg:block pointer-events-none select-none">
                    <div className="relative w-full h-full">
                        {/* Left edge fade into cream background */}
                        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-cream via-cream/70 to-transparent z-10" />
                        <img
                            src="/images/treasures-flatlay.webp"
                            alt="Treasured heirlooms - vintage teacups, silver, handwritten letters"
                            className="w-full h-full object-cover object-center opacity-85"
                            style={{ filter: 'grayscale(0.25) contrast(0.96) brightness(1.02)' }}
                            width={1024}
                            height={1024}
                        />
                        {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream via-cream/70 to-transparent z-10" />
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    {/* Premium badge - mobile optimized */}
                    <div className="mb-5 sm:mb-6 md:mb-8">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-olive/15 bg-cream/80 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0"></span>
                            <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-olive/60 font-medium">
                                <span className="hidden sm:inline">Full-Service Estate Sales · East Bay Area</span>
                                <span className="sm:hidden">Estate Sales · East Bay</span>
                            </span>
                        </span>
                    </div>

                    {/* Main headline - bold weight for impact */}
                    <h1 className="font-display font-semibold text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] sm:leading-[0.95] tracking-tighter text-olive mb-5 sm:mb-6 max-w-4xl">
                        <span className="block">Estate Sales</span>
                        <span className="block">Handled with Heart</span>
                    </h1>

                    {/* Accent line */}


                    {/* Mobile hero image - landscape version, full bleed */}
                    <div className="lg:hidden mb-8 sm:mb-10 -mx-5 sm:-mx-6 md:-mx-12">
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
                    <div className="max-w-xl mb-12 sm:mb-16">
                        <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-olive font-medium leading-snug tracking-tight mb-5 sm:mb-6">
                            Heart & Home Estate Sales is a family-owned, full-service estate sale company serving the East Bay and surrounding areas.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-olive/60 leading-relaxed mb-6 sm:mb-8">
                            We handle every detail with care, transparency, and respect—so you don't have to.
                        </p>
                        {/* Primary CTA - For families needing help */}
                        <div className="mb-2">
                            <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-olive/50 font-medium">Personal Consultation</span>
                        </div>
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-olive text-cream w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full font-medium hover:bg-olive-muted transition-colors group min-h-[52px]"
                        >
                            <Icon name="phone" s={18} />
                            <span className="tracking-wide text-[15px] sm:text-base tabular-nums">{DATA.config.phone}</span>
                        </a>

                        {/* Secondary CTA - For shoppers looking for sales */}
                        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-olive/10">
                            <p className="text-sm text-olive/50 mb-2.5 sm:mb-3">Looking for estate sales in the East Bay Area?</p>
                            <a
                                href="/alerts"
                                className="inline-flex items-center gap-2 text-sage hover:text-olive transition-colors text-sm font-medium group py-3 -my-3 pr-2"
                            >
                                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                                <span>Get notified about upcoming sales</span>
                                <Icon name="right" s={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </a>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <button
                        onClick={() => document.getElementById('permission')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-3 text-olive/40 hover:text-olive/60 transition-colors cursor-pointer"
                    >
                        <div className="w-px h-12 bg-olive/20"></div>
                        <span className="text-xs uppercase tracking-widest font-medium">Keep reading</span>
                        <Icon name="down" s={16} />
                    </button>
                </div>
            </section>

            {/* The Permission Statement - increased padding */}
            <section id="permission" className="py-20 sm:py-24 md:py-48 px-5 sm:px-6 md:px-12 lg:px-20 bg-olive text-cream scroll-mt-16">
                <div className="max-w-[1000px] mx-auto text-center">
                    <p className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug tracking-tight mb-8 md:mb-10">
                        Your family's legacy deserves experienced, caring hands
                        <span className="text-cream/60 block mt-1 sm:mt-0 sm:inline"></span>
                    </p>
                    <a
                        href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-sage/50 hover:border-sage hover:bg-sage/10 transition-all"
                    >
                        <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-sage font-medium">Personal Consultation</span>
                        <span className="text-lg sm:text-xl text-cream tracking-wide tabular-nums">{DATA.config.phone}</span>
                    </a>
                </div>
            </section>

            {/* Here's What Happens When You Call Us */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="mb-16">
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-olive mb-4">
                                Your first step<br />
                                <span className="text-sage italic">with heart & home:</span>
                            </h2>
                        </div>

                        <div className="space-y-0">
                            {[
                                {
                                    title: "We walk through the home together one time.",
                                    desc: "You let us know what you're keeping, what's staying with family, and what's off-limits. After that, you don't have to make any more decisions—we've got it."
                                },
                                {
                                    title: "We carefully price everything.",
                                    desc: "Furniture, jewelry, art, tools, even the forgotten treasures tucked away in the attic. With over $4M in East Bay estate sales, we know what things are worth and how to connect them with the right buyers."
                                },
                                {
                                    title: "We handle the entire sale for you.",
                                    desc: "Buyers interact with our team—not you—so you're free to step away and have peace of mind."
                                },
                                {
                                    title: "You get a check.",
                                    desc: "When the sale is complete, you receive a check along with a clear, detailed breakdown of everything sold. No surprises—just clarity. Many families are pleasantly surprised by the outcome."
                                }
                            ].map((step, i) => (
                                <div key={i} className="group border-t border-olive/10 first:border-t-0 py-8 md:py-10">
                                    <div className="flex gap-4 md:gap-6">
                                        <span className="text-xl text-sage flex-shrink-0">→</span>
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
            <section id="about" className="py-20 md:py-32 px-5 sm:px-6 md:px-12 lg:px-20 scroll-mt-24 overflow-visible">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Content - Shows FIRST on mobile, second on desktop */}
                        <div className="order-1 md:order-2">
                            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-olive mb-6">
                                You shouldn't have to{' '}
                                <span className="text-sage italic">do this alone.</span>
                            </h2>
                            <div className="space-y-4 text-base sm:text-lg text-olive/70 leading-relaxed mb-8">
                                <p>
                                    Whether you're settling an estate, downsizing, or helping a parent transition, the to-do list can feel endless—pricing, photographing, welcoming buyers, answering countless questions.
                                    <br />We're here to carry that weight with you.
                                </p>

                            </div>
                            <div className="bg-cream-dark rounded-sm p-6 sm:p-8 md:p-10 border border-olive/5">
                                <h3 className="text-xs uppercase tracking-widest text-sage mb-5 md:mb-6 font-semibold">What We Handle</h3>
                                <ul className="space-y-3 sm:space-y-4">
                                    {[
                                        "Thoughtfully sorting, organizing, and staging the entire home",
                                        "Researching and fairly pricing each item with care",
                                        "Professional photography and marketing to the right buyers",
                                        "Managing the sale from start to finish—all the people, all the questions",
                                        "Appraisals for antiques, art, jewelry, and collector pieces through trusted experts",
                                        "Coordinating clean-out services and donations once the sale is complete",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-olive/80">
                                            <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Image - Shows SECOND on mobile, first on desktop */}
                        <div className="relative order-2 md:order-1 mt-8 md:mt-0 pb-6 pr-2 md:pb-0 md:pr-0">
                            <div className="aspect-[3/4] rounded-sm overflow-hidden">
                                <img
                                    src="/images/shauna.webp"
                                    alt={`${DATA.config.owner} - ${DATA.config.legalName}`}
                                    className="w-full h-full object-cover grayscale contrast-[0.92] brightness-[1.04] mix-blend-multiply opacity-90"
                                    width={1200}
                                    height={1600}
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -bottom-2 right-0 md:-bottom-4 md:-right-4 bg-white rounded-sm p-3 sm:p-4 shadow-lg border border-olive/5">
                                <p className="font-display text-base sm:text-lg text-olive">Hi, I'm {DATA.config.owner}.</p>
                                <p className="text-[10px] sm:text-xs text-olive/60 uppercase tracking-wider font-medium">Owner & Founder</p>
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
                                    We're not here to simply clear a house—we're here to honor what's inside it.
                                </strong>
                                We connect your family's belongings with people who appreciate them, from collectors to neighbors.
                            </p>
                            <p>
                                The home empties, you're compensated, and you don't have to navigate tough family decisions alone
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area + Selectivity - simplified prose instead of pills */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-[900px] mx-auto">
                    <p className="text-lg md:text-xl text-olive/70 leading-relaxed mb-8">
                        We proudly serve the Bay Area, including Contra Costa and Alameda Counties—and we're happy to travel to surrounding areas.
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-olive tracking-tight leading-snug">
                        If this feels like something that deserves to be done right, we'd love to talk
                    </p>
                </div>
            </section>

            {/* Trust Bar */}
            <TrustBar />

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA - Phone First, No Forms */}
            <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 text-cream" style={{ backgroundColor: '#a1997e' }}>
                <div className="max-w-[900px] mx-auto">
                    <div className="mb-10 md:mb-12">
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 md:mb-6">
                            Call {DATA.config.owner} directly.
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-cream/70 leading-relaxed">
                            No phone tag. No "request a quote" form.
                            <span className="block sm:inline"> Just a real conversation with someone who's helped families through this hundreds of times</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-16">
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center justify-center gap-3 sm:gap-4 bg-cream text-olive px-8 sm:px-10 py-5 sm:py-6 rounded-full text-lg sm:text-xl font-medium hover:bg-white transition-colors group"
                        >
                            <Icon name="phone" s={22} />
                            <span className="tracking-wide tabular-nums">{DATA.config.phone}</span>
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 md:gap-8 text-sm text-cream/50">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Bonded & Insured
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Family-Owned
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
