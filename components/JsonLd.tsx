import React from 'react';
import { DATA } from '../constants';

interface JsonLdProps {
    includeFAQ?: boolean;
    includeEvent?: boolean;
    page?: 'home' | 'sales' | 'shop' | 'about';
}

export const JsonLd: React.FC<JsonLdProps> = ({
    includeFAQ = true,
    includeEvent = true,
    page = 'home'
}) => {
    const { config, sale, testimonials, faqs } = DATA;
    const baseUrl = config.url || 'https://heartandhomeestatesales.com';

    // Stable @id identifiers for entity linking
    const businessId = `${baseUrl}/#business`;
    const websiteId = `${baseUrl}/#website`;
    const ownerId = `${baseUrl}/#owner`;

    // Image array per Google spec (multiple aspect ratios)
    const images = [
        config.image ? `${baseUrl}${config.image}` : null,
        config.logo ? `${baseUrl}${config.logo}` : null,
        `${baseUrl}/images/og-image.jpg`
    ].filter(Boolean);

    // PostalAddress entity
    const postalAddress = config.address ? {
        "@type": "PostalAddress",
        "streetAddress": config.address.street,
        "addressLocality": config.address.city,
        "addressRegion": config.address.state,
        "postalCode": config.address.zip,
        "addressCountry": config.address.country
    } : undefined;

    // GeoCoordinates entity (5+ decimal precision per Google)
    const geoCoordinates = config.geo ? {
        "@type": "GeoCoordinates",
        "latitude": config.geo.lat.toFixed(6),
        "longitude": config.geo.lng.toFixed(6)
    } : undefined;

    // OpeningHoursSpecification (structured format)
    const openingHoursSpec = config.openingHours?.map(hours => {
        const [days, time] = hours.split(' ');
        const [opens, closes] = time.split('-');
        const dayMap: Record<string, string> = {
            Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday',
            Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday'
        };

        // Handle day ranges (Mo-Fr) and individual days (Mo,Tu)
        let dayOfWeek: string[] = [];
        if (days.includes('-')) {
            const [start, end] = days.split('-');
            const allDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
            const startIdx = allDays.indexOf(start);
            const endIdx = allDays.indexOf(end);
            dayOfWeek = allDays.slice(startIdx, endIdx + 1).map(d => dayMap[d]);
        } else {
            dayOfWeek = days.split(',').map(d => dayMap[d]);
        }

        return {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": dayOfWeek,
            "opens": opens,
            "closes": closes
        };
    });

    // Owner/Founder Person entity
    const ownerPerson = {
        "@type": "Person",
        "@id": ownerId,
        "name": config.owner,
        "jobTitle": "Owner & Founder",
        "worksFor": { "@id": businessId }
    };

    // ContactPoint for customer service
    const contactPoint = {
        "@type": "ContactPoint",
        "telephone": config.phone,
        "contactType": "customer service",
        "email": config.email,
        "areaServed": "US",
        "availableLanguage": "English",
        "contactOption": ["TollFree", "HearingImpairedSupported"]
    };

    // Service offerings with full Offer structure
    const serviceOfferings = config.services?.map((service, index) => ({
        "@type": "Offer",
        "@id": `${baseUrl}/#offer-${index}`,
        "itemOffered": {
            "@type": "Service",
            "@id": `${baseUrl}/#service-${index}`,
            "name": service,
            "description": getServiceDescription(service),
            "provider": { "@id": businessId },
            "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": geoCoordinates,
                "geoRadius": "50 mi"
            },
            "serviceType": "Estate Sale Services"
        }
    }));

    // Main LocalBusiness entity - using ProfessionalService (most specific applicable type)
    const localBusiness = {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        "name": config.legalName || config.name,
        "alternateName": config.name,
        "legalName": config.legalName,
        "description": `Full-service estate sales for ${config.area}. We handle pricing, staging, photography, marketing, and the entire sale so you don't have to. ${config.creds}.`,
        "slogan": config.tagline || "Where memories find new homes.",
        "url": baseUrl,
        "telephone": config.phone,
        "email": config.email,
        "image": images,
        "logo": {
            "@type": "ImageObject",
            "url": config.logo ? `${baseUrl}${config.logo}` : undefined,
            "width": "512",
            "height": "512"
        },
        "foundingDate": config.foundingDate,
        "founder": { "@id": ownerId },
        "address": postalAddress,
        "geo": geoCoordinates,
        "hasMap": `https://www.google.com/maps/search/?api=1&query=${config.geo?.lat},${config.geo?.lng}`,
        "areaServed": [
            { "@type": "City", "name": "Brentwood", "containedInPlace": { "@type": "State", "name": "California" } },
            { "@type": "City", "name": "Pleasanton", "containedInPlace": { "@type": "State", "name": "California" } },
            { "@type": "City", "name": "Walnut Creek", "containedInPlace": { "@type": "State", "name": "California" } },
            { "@type": "AdministrativeArea", "name": "East Bay Area" }
        ],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": geoCoordinates,
            "geoRadius": "50 mi"
        },
        "openingHoursSpecification": openingHoursSpec,
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Venmo"],
        "contactPoint": contactPoint,
        "sameAs": [config.facebookUrl, config.instagramUrl].filter(Boolean),
        "knowsAbout": [
            "Estate Sales",
            "Estate Liquidation",
            "Antique Appraisal",
            "Downsizing Services",
            "Moving Sales",
            "Personal Property Sales"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Estate Sale Services",
            "itemListElement": serviceOfferings
        },
        "makesOffer": serviceOfferings,
        "isAcceptingNewCustomers": true,
        "additionalProperty": [
            { "@type": "PropertyValue", "name": "Bonded", "value": "Yes" },
            { "@type": "PropertyValue", "name": "Insured", "value": "Yes" },
            { "@type": "PropertyValue", "name": "Family-Owned", "value": "Yes" }
        ]
    };

    // AggregateRating from testimonials
    if (testimonials.length > 0) {
        (localBusiness as any).aggregateRating = {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": testimonials.length.toString(),
            "reviewCount": testimonials.length.toString()
        };
    }

    // Individual Review entities
    const reviews = testimonials.map((t, i) => ({
        "@type": "Review",
        "@id": `${baseUrl}/#review-${i}`,
        "author": {
            "@type": "Person",
            "name": t.name,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": t.loc
            }
        },
        "reviewBody": t.quote,
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
        },
        "itemReviewed": { "@id": businessId },
        "datePublished": config.foundingDate // Use founding year as proxy
    }));

    // FAQPage schema
    const faqPage = includeFAQ && faqs.length > 0 ? {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        "mainEntity": faqs.map((faq, i) => ({
            "@type": "Question",
            "@id": `${baseUrl}/#faq-${i}`,
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    } : null;

    // Event schema for current/upcoming sale
    const saleEvent = includeEvent && sale ? (() => {
        const startDate = new Date(sale.saleDate);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + (sale.dates.length > 1 ? 1 : 0));
        // Set end time based on last day's closing
        const lastDay = sale.dates[sale.dates.length - 1];
        const endTime = lastDay.time.split('–')[1]?.trim() || '5pm';

        return {
            "@type": "Event",
            "@id": `${baseUrl}/#current-sale`,
            "name": `${sale.name} - Estate Sale`,
            "description": `${sale.hook}. Featuring: ${sale.highlights.join(', ')}. ${sale.counts.total}+ items available.`,
            "startDate": sale.saleDate,
            "endDate": endDate.toISOString().split('T')[0],
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
                "@type": "Place",
                "name": sale.name,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": sale.address.short,
                    "addressLocality": sale.address.city,
                    "addressRegion": "CA",
                    "addressCountry": "US"
                }
            },
            "organizer": { "@id": businessId },
            "performer": { "@id": businessId },
            "image": sale.items[0]?.image,
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": sale.saleDate,
                "url": `${baseUrl}/sales`
            },
            "isAccessibleForFree": true
        };
    })() : null;

    // WebSite schema with SearchAction potential
    const webSite = {
        "@type": "WebSite",
        "@id": websiteId,
        "url": baseUrl,
        "name": config.legalName || config.name,
        "description": `Full-service estate sales in ${config.area}`,
        "publisher": { "@id": businessId },
        "inLanguage": "en-US"
    };

    // BreadcrumbList based on current page
    const breadcrumbItems = [
        { position: 1, name: "Home", item: baseUrl }
    ];

    if (page === 'sales') {
        breadcrumbItems.push({ position: 2, name: "Current Sales", item: `${baseUrl}/sales` });
    } else if (page === 'shop') {
        breadcrumbItems.push({ position: 2, name: "Sale Alerts", item: `${baseUrl}/alerts` });
    } else if (page === 'about') {
        breadcrumbItems.push({ position: 2, name: "About Us", item: `${baseUrl}/about` });
    }

    const breadcrumb = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        "itemListElement": breadcrumbItems.map(item => ({
            "@type": "ListItem",
            "position": item.position,
            "name": item.name,
            "item": item.item
        }))
    };

    // WebPage schema for the current page
    const webPage = {
        "@type": "WebPage",
        "@id": `${baseUrl}${page === 'home' ? '/' : `/${page}`}`,
        "url": `${baseUrl}${page === 'home' ? '/' : `/${page}`}`,
        "name": getPageTitle(page, config.legalName || config.name),
        "description": getPageDescription(page, config.area),
        "isPartOf": { "@id": websiteId },
        "about": { "@id": businessId },
        "breadcrumb": { "@id": `${baseUrl}/#breadcrumb` },
        "inLanguage": "en-US",
        "dateModified": new Date().toISOString().split('T')[0]
    };

    // Build the @graph array
    const graph: any[] = [
        localBusiness,
        ownerPerson,
        webSite,
        webPage,
        breadcrumb,
        ...reviews
    ];

    if (faqPage) graph.push(faqPage);
    if (saleEvent) graph.push(saleEvent);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": graph
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
        />
    );
};

// Helper: Service descriptions
function getServiceDescription(service: string): string {
    const descriptions: Record<string, string> = {
        "In-person Estate Sales": "Full-service on-site estate sales with professional pricing, staging, and management. We handle everything from setup to checkout.",
        "Online Auctions": "Reach more buyers with professionally photographed online auctions for specialty items and collections.",
        "Appraisal Services": "Expert evaluation of antiques, collectibles, furniture, and household items for insurance, estate planning, or sale.",
        "Clean-out Services": "Complete home clean-out after the sale, including donation coordination and disposal of remaining items.",
        "Moving Assistance": "Help with downsizing, organizing, and preparing for a move. We coordinate with movers and handle the details."
    };
    return descriptions[service] || `Professional ${service.toLowerCase()} for families in the East Bay area.`;
}

// Helper: Page titles
function getPageTitle(page: string, businessName: string): string {
    const titles: Record<string, string> = {
        home: `${businessName} | Full-Service Estate Sales | Brentwood, CA`,
        sales: `Current & Upcoming Estate Sales | ${businessName}`,
        shop: `Shop Estate Sale Items | ${businessName}`,
        about: `About Us | Our Story & Values | ${businessName}`
    };
    return titles[page] || businessName;
}

// Helper: Page descriptions
function getPageDescription(page: string, area: string): string {
    const descriptions: Record<string, string> = {
        home: `Full-service estate sales for ${area}. We handle pricing, staging, photography, and the entire sale. Bonded & insured. Free consultation.`,
        sales: `Browse current and upcoming estate sales in ${area}. View items, dates, and locations for all Heart & Home estate sales.`,
        shop: `Shop quality items from estate sales in ${area}. Furniture, antiques, collectibles, and household goods.`,
        about: `Meet Shauna and the family behind Heart & Home Estate Sales. Learn about our values, our team of experts, and why we care so deeply about serving the East Bay community.`
    };
    return descriptions[page] || descriptions.home;
}
