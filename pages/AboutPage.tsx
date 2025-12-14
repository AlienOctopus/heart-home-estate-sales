import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';
import { JsonLd } from '../components/JsonLd';

export const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-cream min-h-screen text-olive font-body">
            <JsonLd page="about" />
            {/* 1. Hero / Intro - Warm Foundation */}
            <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 lg:px-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-[0.2em] text-olive/50 mb-4 block animate-fade-up">Est. 2024</span>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-olive mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                        Family Owned.<br />
                        <span className="italic text-sage">Heart Centered.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-olive/70 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
                        Heart & Home Estate Sales is truly what its name suggests: a family business built on values, compassion, and trust.
                    </p>
                </div>
            </section>

            {/* 2. The Founder's Story - Editorial Layout */}
            <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl ring-1 ring-olive/10">
                            <img
                                src="/images/shauna.webp"
                                alt="Shauna - Founder"
                                className="w-full h-full object-cover grayscale contrast-[0.96] brightness-[1.02] mix-blend-multiply opacity-90"
                            />
                        </div>
                        {/* Caption Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-cream border border-olive/10 p-6 shadow-lg max-w-[200px] hidden md:block">
                            <p className="font-display text-lg text-olive">"Every item has a story."</p>
                            <span className="text-xs uppercase tracking-widest text-sage mt-2 block">— Shauna</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="font-display text-4xl text-olive">
                            Hi, I'm Shauna.
                        </h2>
                        <div className="w-16 h-px bg-sage mb-8"></div>
                        <div className="space-y-6 text-lg text-olive/80 leading-relaxed">
                            <p>
                                Teacher, mom, and the heart behind Heart & Home Estate Sales.
                            </p>
                            <p>
                                For the last 11 years, I've dedicated my days to teaching, guiding, and supporting students and families. Somewhere along the way, I discovered a deep love for the estate sale world—connecting with families, honoring their stories, and helping people through meaningful transitions.
                            </p>
                            <p>
                                What started as curiosity quickly grew into a passion: creating organized, thoughtful, and compassionate estate sale experiences for the community I care so deeply about.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Team & Expertise - Distinct Background */}
            <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-olive text-cream my-12">
                <div className="max-w-[1000px] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage/30 bg-sage/10 mb-8">
                        <Icon name="check" s={14} className="text-sage" />
                        <span className="text-xs uppercase tracking-widest text-sage font-medium">Certified Experts</span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
                        Small but Mighty
                    </h2>

                    <p className="text-lg md:text-xl text-cream/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                        We are a family team—my godparents and myself. Together, we bring over <span className="text-white font-medium border-b border-sage/50">30 years of combined experience</span> to every project.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left bg-cream/5 border border-cream/10 p-8 md:p-12 rounded-sm backdrop-blur-sm">
                        <div>
                            <h3 className="font-display text-2xl mb-4 text-cream">Expert Appraisers</h3>
                            <p className="text-cream/70 leading-relaxed">
                                My godparents play a huge role in our team. As certified appraisers in jewelry, art, and antiques, they provide an added layer of transparent expertise.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-display text-2xl mb-4 text-cream">Fair Evaluations</h3>
                            <p className="text-cream/70 leading-relaxed">
                                Their knowledge ensures fair pricing, professional evaluations, and the assurance that valuable pieces are never overlooked.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Values - Grid Layout */}
            <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-olive mb-4">Our Family Values</h2>
                        <p className="text-olive/60">The foundation of everything we do.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {['Loyalty', 'Trust', 'Compassion', 'Comfort', 'Transparency', 'Respect'].map((value, i) => (
                            <div key={i} className="aspect-[4/3] md:aspect-video flex flex-col items-center justify-center p-6 border border-olive/10 hover:border-sage/50 hover:bg-sage/5 transition-all group rounded-sm text-center">
                                <div className="mb-3 text-sage/50 group-hover:text-sage transition-colors transform group-hover:scale-110 duration-300">
                                    <Icon name="heart" s={24} />
                                </div>
                                <span className="font-display text-xl md:text-2xl text-olive">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The Promise / Conclusion */}
            <section className="py-20 px-6 md:px-12 lg:px-20 bg-cream-dark border-t border-olive/5">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <p className="text-xl md:text-2xl text-olive leading-relaxed font-display">
                        "When you invite us into your home, you're not just hiring a company—you're partnering with a family that genuinely cares."
                    </p>
                    <p className="text-lg text-olive/70 leading-relaxed">
                        We understand the emotions, the logistics, and the weight of estate transitions. Our goal is to make the process feel lighter, more organized, and filled with the warmth and dignity your loved one's belongings deserve.
                    </p>

                    <div className="pt-8">
                        <a
                            href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center gap-3 bg-olive text-cream px-8 py-4 rounded-full font-medium hover:bg-olive-muted transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                        >
                            <Icon name="phone" s={20} />
                            <span>Start a Conversation</span>
                        </a>
                        <p className="mt-4 text-sm text-olive/50 uppercase tracking-widest">
                            From our family to yours
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};
