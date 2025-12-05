import React, { useState, useMemo } from 'react';
import { DATA } from '../constants';
import { Item } from '../types';
import { Icon } from './Icons';

export const Gallery: React.FC = () => {
    const [activeItem, setActiveItem] = useState<Item | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');

    // Extract unique categories from items
    const categories = useMemo(() => {
        const cats = new Set(DATA.sale.items.map(item => item.cat));
        return ['all', ...Array.from(cats)];
    }, []);

    // Filter items based on active filter
    const filteredItems = useMemo(() => {
        if (activeFilter === 'all') return DATA.sale.items;
        return DATA.sale.items.filter(item => item.cat === activeFilter);
    }, [activeFilter]);

    return (
        <section id="gallery" className="py-32 bg-cream relative">
            
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                
                {/* Header - Replaced Marquee with Static Elegance */}
                <div className="mb-20 pb-8 border-b border-olive/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="font-display text-5xl md:text-7xl text-olive mb-4 tracking-tight">Property Inventory</h2>
                        <p className="text-xl md:text-2xl text-olive/60 font-light max-w-xl">
                            A partial preview of the contents available for purchase this weekend.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                        <div className="text-xs font-medium uppercase tracking-widest text-olive-muted mb-4">
                            {DATA.sale.counts.shown} Items Photographed
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-xs font-medium uppercase transition-all duration-300 ${
                                        activeFilter === cat
                                            ? 'bg-olive text-cream border border-olive'
                                            : 'border border-olive/10 text-olive/50 hover:border-olive/30 hover:text-olive'
                                    }`}
                                >
                                    {cat === 'all' ? 'All Items' : cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Masonry Grid via CSS Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            onClick={() => setActiveItem(item)}
                            className="group cursor-pointer break-inside-avoid relative"
                        >
                            <div className="relative overflow-hidden rounded-[1.5rem] bg-cream-dark">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-auto object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 grayscale-[10%]"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/10 transition-colors duration-500" />
                                
                                {/* "View" Custom Cursor Simulation */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cream/95 backdrop-blur rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl z-20">
                                    <span className="text-xs font-bold tracking-widest uppercase text-olive">View</span>
                                </div>
                            </div>
                            
                            <div className="mt-4 opacity-80 group-hover:opacity-100 transition-opacity pl-2">
                                <h3 className="font-display text-2xl leading-tight text-olive mb-1">{item.title}</h3>
                                <p className="text-xs font-medium text-olive-muted uppercase tracking-wider">{item.cat}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeItem && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-olive/30 backdrop-blur-md"
                    onClick={() => setActiveItem(null)}
                >
                    <div 
                        className="bg-cream w-full max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in relative max-h-[90vh] flex flex-col md:flex-row"
                        onClick={e => e.stopPropagation()}
                    >
                         {/* Close Button */}
                         <button 
                            onClick={() => setActiveItem(null)}
                            className="absolute top-6 right-6 z-20 w-14 h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors text-olive"
                         >
                             <Icon name="x" s={24} />
                         </button>

                        <div className="w-full md:w-1/2 bg-cream-dark h-[40vh] md:h-auto">
                            <img 
                                src={activeItem.image} 
                                alt={activeItem.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-cream relative overflow-y-auto">
                            <div className="text-sm font-medium text-olive-muted uppercase tracking-widest mb-8">Lot No. 00{activeItem.id}</div>
                            <h3 className="font-display text-4xl md:text-6xl mb-8 text-olive leading-[1] tracking-tight">{activeItem.title}</h3>
                            <p className="text-olive/70 text-lg md:text-xl leading-relaxed mb-10 font-light">{activeItem.desc}</p>
                            
                            {activeItem.story && (
                                <div className="mb-12 pl-8 border-l-2 border-sage">
                                    <p className="font-display italic text-2xl text-olive">"{activeItem.story}"</p>
                                </div>
                            )}
                            
                            <div className="mt-auto pt-10 border-t border-olive/10 flex gap-6 text-xs font-medium uppercase tracking-widest text-olive-muted">
                                <span>Condition: Excellent</span>
                                <span>•</span>
                                <span>Available Sat</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};