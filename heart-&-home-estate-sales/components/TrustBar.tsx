import React from 'react';
import { DATA } from '../constants';

export const TrustBar: React.FC = () => {
    const stats = [
        {
            value: `${DATA.config.stats.families}+`,
            label: 'Families Served'
        },
        {
            value: `$${(DATA.config.stats.saleMin / 1000).toFixed(0)}k–$${(DATA.config.stats.saleMax / 1000).toFixed(0)}k`,
            label: 'Average Sale'
        },
        {
            value: '48hr',
            label: 'Response Time'
        },
    ];

    return (
        <section className="py-8 md:py-10 bg-olive text-cream relative overflow-hidden">
            {/* Noise overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                    {/* Stats */}
                    <div className="flex items-center gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="font-display text-2xl md:text-3xl tracking-tight">{stat.value}</div>
                                <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-cream/60">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Credentials Badge */}
                    <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-cream/20 bg-cream/5">
                        <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                        <span className="font-mono text-xs uppercase tracking-wider text-cream/80">{DATA.config.creds}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
