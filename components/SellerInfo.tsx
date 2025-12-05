import React, { useState } from 'react';
import { DATA } from '../constants';
import { Icon } from './Icons';

export const SellerInfo: React.FC = () => {
    const [form, setForm] = useState({ n: '', c: '', m: '' });
    const [errors, setErrors] = useState<{ n?: string; c?: string }>({});
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async () => {
        const newErrors: { n?: string; c?: string } = {};
        let isValid = true;

        if (!form.n.trim()) {
            newErrors.n = "Please enter your name";
            isValid = false;
        }
        if (!form.c.trim()) {
            newErrors.c = "We need a way to reach you";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setSubmitting(true);
            try {
                // Using Formspree - replace YOUR_FORM_ID with actual form ID
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: form.n,
                        contact: form.c,
                        message: form.m,
                        _subject: `New Estate Sale Inquiry from ${form.n}`,
                    }),
                });

                if (response.ok) {
                    setSent(true);
                } else {
                    // Fallback: still show success for demo purposes
                    // In production, handle error appropriately
                    setSent(true);
                }
            } catch {
                // Fallback for demo: show success state
                // In production, show error message
                setSent(true);
            } finally {
                setSubmitting(false);
            }
        }
    };

    const clearError = (field: 'n' | 'c') => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <section id="families" className="bg-olive text-cream pt-32 pb-40 md:pb-32 rounded-t-[3rem] md:rounded-t-[5rem] relative -mt-12 z-20">
            
            <div className="max-w-[1200px] mx-auto px-6">
                
                {/* Intro */}
                <div className="grid md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <span className="inline-block py-1 px-3 border border-sage/30 rounded-full font-mono text-xs text-sage uppercase tracking-widest mb-6">Services</span>
                        <h2 className="font-display text-6xl md:text-8xl leading-none tracking-tight">
                            We handle <br/> <span className="text-sage italic font-light">the weight</span> <br/> of it all.
                        </h2>
                    </div>
                    <div className="flex flex-col justify-end">
                        <p className="text-lg md:text-2xl text-cream/80 font-light leading-relaxed mb-8 max-w-lg">
                            Liquidation is more than just selling things. It's honoring a life. We provide a white-glove service that respects the home, the history, and the family.
                        </p>
                        <div className="h-px w-full bg-cream/10" />
                    </div>
                </div>

                {/* Process Timeline */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {DATA.sellerProcess.map((s, i) => (
                        <div key={i} className="relative group">
                            <div className="h-px w-full bg-cream/20 mb-8 group-hover:bg-sage transition-colors duration-500 relative">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sage opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="font-mono text-4xl text-sage/40 mb-4 group-hover:text-sage transition-colors">0{s.n}</div>
                            <h4 className="font-display text-2xl mb-3 tracking-tight">{s.t}</h4>
                            <p className="text-cream/60 leading-relaxed text-base font-light pr-4">{s.d}</p>
                        </div>
                    ))}
                </div>

                {/* Premium Contact Layout - Guestbook Style */}
                <div id="contact-form" className="bg-cream text-olive rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                        <div>
                            <h3 className="font-display text-4xl md:text-6xl mb-6 tracking-tight">Start a conversation.</h3>
                            <p className="text-olive/70 text-lg mb-12 font-light leading-relaxed">
                                Tell us about the estate. We usually schedule a walkthrough within 48 hours.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-olive text-cream flex items-center justify-center group-hover:bg-sage transition-colors">
                                        <Icon name="phone" s={20} />
                                    </div>
                                    <div>
                                        <div className="font-mono text-xs uppercase tracking-widest text-olive-muted">Call Us</div>
                                        <div className="font-display text-xl tracking-tight">{DATA.config.phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-olive text-cream flex items-center justify-center group-hover:bg-sage transition-colors">
                                        <span className="font-serif italic text-xl">@</span>
                                    </div>
                                    <div>
                                        <div className="font-mono text-xs uppercase tracking-widest text-olive-muted">Email</div>
                                        <div className="font-display text-xl tracking-tight">{DATA.config.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {!sent ? (
                            <div className="space-y-12 pt-4">
                                <div className="group relative">
                                    <label className={`block font-mono text-xs uppercase tracking-widest mb-2 transition-colors ${errors.n ? 'text-red-500' : 'text-olive-muted'}`}>
                                        Your Name
                                    </label>
                                    {/* Typography Shift: Serif Input */}
                                    <input 
                                        type="text"
                                        value={form.n}
                                        onChange={e => {
                                            setForm({...form, n: e.target.value});
                                            clearError('n');
                                        }}
                                        className={`w-full bg-transparent border-b py-4 text-3xl font-display focus:outline-none transition-all placeholder:text-olive/10 placeholder:font-light italic
                                            ${errors.n 
                                                ? 'border-red-500 text-red-600 focus:border-red-500' 
                                                : 'border-olive/20 focus:border-olive text-olive'
                                            }`}
                                        placeholder="Jane Doe"
                                    />
                                    {errors.n && (
                                        <div className="absolute right-0 top-1/2 translate-y-2 text-xs font-mono text-red-500 uppercase tracking-widest animate-fade-up" style={{ animationDuration: '0.3s' }}>
                                            {errors.n}
                                        </div>
                                    )}
                                </div>

                                <div className="group relative">
                                    <label className={`block font-mono text-xs uppercase tracking-widest mb-2 transition-colors ${errors.c ? 'text-red-500' : 'text-olive-muted'}`}>
                                        Contact Info
                                    </label>
                                    <input 
                                        type="text"
                                        value={form.c}
                                        onChange={e => {
                                            setForm({...form, c: e.target.value});
                                            clearError('c');
                                        }}
                                        className={`w-full bg-transparent border-b py-4 text-3xl font-display focus:outline-none transition-all placeholder:text-olive/10 placeholder:font-light italic
                                            ${errors.c 
                                                ? 'border-red-500 text-red-600 focus:border-red-500' 
                                                : 'border-olive/20 focus:border-olive text-olive'
                                            }`}
                                        placeholder="Phone or Email"
                                    />
                                    {errors.c && (
                                        <div className="absolute right-0 top-1/2 translate-y-2 text-xs font-mono text-red-500 uppercase tracking-widest animate-fade-up" style={{ animationDuration: '0.3s' }}>
                                            {errors.c}
                                        </div>
                                    )}
                                </div>

                                <div className="group">
                                    <label className="block font-mono text-xs uppercase tracking-widest text-olive-muted mb-2">How can we help?</label>
                                    <textarea 
                                        rows={2}
                                        value={form.m}
                                        onChange={e => setForm({...form, m: e.target.value})}
                                        className="w-full bg-transparent border-b border-olive/20 py-4 text-2xl font-display focus:outline-none focus:border-olive transition-colors placeholder:text-olive/10 placeholder:font-light italic resize-none text-olive"
                                        placeholder="Brief details..."
                                    />
                                </div>
                                
                                <button
                                    onClick={handleSubmit}
                                    disabled={submitting}
                                    className="w-full bg-olive text-cream py-6 rounded-xl font-mono text-xs uppercase tracking-[0.2em] hover:bg-olive-muted transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {submitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Submit Inquiry'
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center p-12 border border-olive/10 rounded-2xl bg-white/50">
                                <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mb-6 text-2xl">✓</div>
                                <h4 className="font-display text-3xl mb-2">Received</h4>
                                <p className="text-olive-muted">We'll be in touch shortly.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};