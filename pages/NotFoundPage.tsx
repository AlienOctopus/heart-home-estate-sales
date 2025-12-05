import React from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../constants';
import { Icon } from '../components/Icons';

export const NotFoundPage: React.FC = () => {
    return (
        <main id="main-content" className="bg-cream min-h-screen text-olive font-body flex flex-col justify-center items-center px-6 py-32">
            <div className="text-center max-w-lg">
                <div className="font-mono text-xs uppercase tracking-widest text-olive/40 mb-4">404</div>
                <h1 className="font-display text-4xl md:text-5xl tracking-tight text-olive mb-6">
                    Page not found
                </h1>
                <p className="text-lg text-olive/60 leading-relaxed mb-10">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-3 bg-olive text-cream px-8 py-4 rounded-full font-medium hover:bg-olive-muted transition-colors"
                    >
                        <Icon name="left" s={16} />
                        Back to Home
                    </Link>
                    <a
                        href={`tel:${DATA.config.phone.replace(/\D/g, '')}`}
                        className="inline-flex items-center justify-center gap-3 border border-olive/20 text-olive px-8 py-4 rounded-full font-medium hover:border-olive transition-colors"
                    >
                        <Icon name="phone" s={16} />
                        Call Us
                    </a>
                </div>
            </div>
        </main>
    );
};
