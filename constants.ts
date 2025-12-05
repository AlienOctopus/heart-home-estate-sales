import { AppData } from './types';
import { SITE_URL } from './domain.config';

export const DATA: AppData = {
    config: {
        name: "Heart & Home",
        legalName: "Heart & Home Estate Sales",
        phone: "(925) 544-7051",
        email: "shauna@heartandhomeestatesale.com", // Note: email domain differs from site domain
        tagline: "Where memories find new homes.",
        url: SITE_URL,
        area: "Brentwood, Danville, Blackhawk & the Tri-Valley",
        areaShort: "East Bay",
        baseCity: "Brentwood, CA",
        // Prestigious neighborhoods for local SEO
        serviceNeighborhoods: [
            "Shadow Lakes", "Sterling Preserve", "Vista Dorado", "Deer Ridge",
            "Ruby Hill", "Blackhawk", "Alamo", "Danville", "Walnut Creek",
            "Pleasanton", "Livermore", "Discovery Bay"
        ],
        address: {
            street: "123 Main Street", // Update with actual address
            city: "Brentwood",
            state: "CA",
            zip: "94513",
            country: "US"
        },
        geo: {
            lat: 37.9318,
            lng: -121.6958
        },
        openingHours: [
            "Mo-Fr 09:00-17:00",
            "Sa 09:00-14:00"
        ],
        foundingDate: "2024",
        logo: "/images/logo.png",
        image: "/images/hero-living-room.webp",
        facebookUrl: "https://www.facebook.com/people/Heart-Home-Estate-Sales/61584222547232/",
        instagramUrl: "", // Not set up yet
        stats: { families: 0, saleMin: 8000, saleMax: 15000 }, // New business - will grow
        owner: "Shauna",
        creds: "Bonded & Insured • Family-Owned",
        services: [
            "In-person Estate Sales",
            "Online Auctions",
            "Appraisal Services",
            "Clean-out Services",
            "Moving Assistance"
        ]
    },
    sale: {
        name: "The Baxter Estate",
        hook: "52 years of treasures from a beloved Brentwood family",
        highlights: ["Mid-century furniture", "Vintage kitchenware", "Hand tools"],
        counts: { shown: 127, total: 300 },
        dates: [
            { day: "Saturday", date: "January 18", time: "8am – 4pm" },
            { day: "Sunday", date: "January 19", time: "10am – 3pm" },
        ],
        saleDate: "2025-01-18T08:00:00",
        address: { short: "Shadow Lakes", city: "Brentwood", full: "Shadow Lakes, Brentwood, CA 94513" },
        items: [
            { 
                id: 1, 
                title: "Walnut Credenza", 
                desc: "Mid-century, brass legs, original finish", 
                cat: "furniture", 
                story: "Purchased in 1962 on a honeymoon trip to San Francisco.",
                image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 2, 
                title: "Pyrex Collection", 
                desc: "12 pieces, rare Spring Blossom", 
                cat: "kitchen",
                image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 3, 
                title: "Craftsman Tool Chest", 
                desc: "52-inch rolling cabinet", 
                cat: "tools", 
                story: "Used by a dedicated woodworker for over 40 years.",
                image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 7, 
                title: "Vintage Cameras", 
                desc: "Kodak, Polaroid collection", 
                cat: "vintage",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
            },
        ]
    },
    testimonials: [
        { quote: "Shauna treated my mother's home like it was her own. I didn't have to lift a finger.", name: "Michelle T.", loc: "Brentwood", ctx: "Mom's estate", init: "MT" },
        { quote: "I was dreading this. They made it feel manageable—even meaningful.", name: "David R.", loc: "Walnut Creek", ctx: "Parents' estate", init: "DR" },
        { quote: "They told me upfront that some things weren't worth selling. That honesty meant everything.", name: "Karen M.", loc: "Pleasanton", ctx: "Downsizing", init: "KM" }
    ],
    sellerProcess: [
        { n: '1', t: 'We Come to You', sub: 'Free', d: 'Within 48 hours, we\'ll walk through together. No pressure. We\'ll tell you honestly if a sale makes sense.' },
        { n: '2', t: 'We Handle Everything', sub: '', d: 'Pricing, staging, photography, marketing, and the entire sale. You don\'t lift a box.' },
        { n: '3', t: 'You Get a Check', sub: '', d: 'Detailed accounting of every item. Average families receive $8k-$15k.' },
    ],
    shopperSteps: [
        { n: '01', t: 'Arrive Early', s: 'Doors at 8am. Regulars line up by 7:30.', d: 'If you want first pick, arrive early. Prefer leisurely browsing? Come after 10am when the rush has passed.' },
        { n: '02', t: 'Everything\'s Priced', s: 'Day 1 firm. Day 2 flexible.', d: 'No haggling—every item has a sticker. Saturday prices are firm. Sunday most items are 25% off. Final hours? Make us an offer.' },
        { n: '03', t: 'Easy Checkout', s: 'Cash, card, or Venmo.', d: 'We accept all payment types. Large furniture can be held until 5pm—bring a truck or ask about our $75 local delivery.' },
    ],
    faqs: [
        { q: 'Can I buy before the sale?', a: 'No holds or pre-sales. First come, first served—that\'s what makes it fair.' },
        { q: 'Do you deliver?', a: 'We partner with a local mover for items within 30 miles. Flat $75.' },
        { q: 'What if something isn\'t priced?', a: 'Just ask! We\'ll price it on the spot.' },
    ]
};