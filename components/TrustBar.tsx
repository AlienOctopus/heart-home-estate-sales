import React from 'react';

export const TrustBar: React.FC = () => {
    return (
        <section className="py-5 md:py-6 bg-olive text-cream relative overflow-hidden">
            {/* Noise overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
                    {/* Service promise indicators - luxury positioning */}
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
                        Discreet Service
                    </span>
                    <span className="hidden md:inline text-cream/30">•</span>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
                        Accurate Valuations
                    </span>
                    <span className="hidden md:inline text-cream/30">•</span>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
                        Complete Estate Management
                    </span>
                    <span className="hidden md:inline text-cream/30">•</span>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
                        Bonded & Insured
                    </span>
                </div>
            </div>
        </section>
    );
};
