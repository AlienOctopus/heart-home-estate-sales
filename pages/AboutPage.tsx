import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';

export const AboutPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-cream min-h-screen text-olive font-body pt-32">
            <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-olive mb-6">
                        About Heart & Home
                    </h1>
                    <div className="w-24 h-1 bg-olive/10 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    
                    {/* Bio Text */}
                    <div className="md:col-span-12 lg:col-span-8 space-y-6 text-lg text-olive/80 leading-relaxed">
                        <p className="font-display text-2xl text-olive mb-4">
                            Hi, I'm Shauna—teacher, mom, and the heart behind Heart & Home Estate Sales.
                        </p>

                        <p>
                            For the last 11 years, I've dedicated my days to teaching, guiding, and supporting students and families. Somewhere along the way, I discovered a deep love for the estate sale world—connecting with families, honoring their stories, and helping people through meaningful transitions. What started as curiosity quickly grew into a passion: creating organized, thoughtful, and compassionate estate sale experiences for the community I care so deeply about.
                        </p>

                        <p>
                            Heart & Home Estate Sales is truly what its name suggests: a family business built on values, compassion, and trust.
                        </p>

                        <p>
                            We are a small but mighty team—my godparents and myself—and together we bring over 30 years of combined experience to every project we take on. We don't just walk into a home and set up a sale; we walk in with care, respect, and intention. Every item has a story. Every sale reflects a lifetime of memories. We treat each estate as if it belonged to our own family.
                        </p>

                        <div className="bg-cream-dark p-8 rounded-sm border border-olive/5 my-8">
                            <h3 className="font-display text-xl text-olive mb-4">Expertise You Can Trust</h3>
                            <p className="mb-0">
                                Our godparents play a huge role in what makes our team exceptional. They are certified appraisers in jewelry, art, and antiques, giving our clients an added layer of expertise, transparency, and confidence. Their knowledge ensures fair pricing, professional evaluations, and the assurance that valuable pieces are never overlooked.
                            </p>
                        </div>

                        <h3 className="font-display text-2xl text-olive mt-10 mb-6">Our Core Values</h3>
                        <p>
                            But more than anything, what drives us are our family values:
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                            {['Loyalty', 'Trust', 'Compassion', 'Comfort', 'Transparency', 'Respect'].map((value) => (
                                <li key={value} className="flex items-center gap-3 text-olive font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
                                    {value}
                                </li>
                            ))}
                        </ul>
                        <p className="font-medium text-olive">
                            These are the foundation of Heart & Home.
                        </p>

                        <p>
                            When you invite us into your home, you're not just hiring a company—you're partnering with a family that genuinely cares. We understand the emotions, the logistics, and the weight of estate transitions. Our goal is to make the process feel lighter, more organized, and filled with the warmth and dignity your loved one's belongings deserve.
                        </p>

                        <div className="pt-8 mt-8 border-t border-olive/10">
                            <p className="text-xl font-display text-olive italic">
                                Thank you for considering us to walk alongside you during such meaningful moments.
                                <br />
                                From our family to yours—welcome to Heart & Home.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Image Area */}
                    <div className="md:col-span-12 lg:col-span-4 space-y-8">
                        {/* Shauna Image */}
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg ring-1 ring-olive/10">
                            <img
                                src="/images/shauna.webp"
                                alt="Shauna - Owner of Heart & Home Estate Sales"
                                className="w-full h-full object-cover grayscale contrast-[0.92] brightness-[1.04] mix-blend-multiply opacity-90"
                            />
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-olive text-cream p-8 rounded-sm">
                            <h3 className="font-display text-2xl mb-4">Let's Connect</h3>
                            <p className="text-cream/70 mb-6 text-sm leading-relaxed">
                                Ready to discuss your estate sale needs? I'm here to help.
                            </p>
                            <a
                                href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                                className="flex items-center justify-center gap-2 w-full bg-cream text-olive py-3 px-4 rounded-full font-medium hover:bg-sage hover:text-white transition-colors"
                            >
                                <Icon name="phone" s={18} />
                                <span>{DATA.config.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
};
