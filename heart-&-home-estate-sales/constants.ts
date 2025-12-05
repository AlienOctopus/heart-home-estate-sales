import { AppData } from './types';

export const DATA: AppData = {
    config: {
        name: "Heart & Home",
        legalName: "Heart & Home Estate Sales",
        phone: "(925) 544-7051",
        email: "hello@heartandhomeestatesales.com",
        url: "https://heartandhomeestatesales.com",
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
        image: "/images/hero-living-room.jpg",
        instagramUrl: "https://instagram.com/heartandhomeestatesales",
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
        name: "The Whitfield Estate",
        hook: "47 years of one family's treasures",
        highlights: ["Mid-century furniture", "Vintage kitchenware", "Hand tools"],
        counts: { shown: 127, total: 300 },
        dates: [
            { day: "Saturday", date: "March 15", time: "8am – 4pm" },
            { day: "Sunday", date: "March 16", time: "10am – 3pm" },
        ],
        saleDate: "2024-03-15T08:00:00",
        address: { short: "1847 Maple Grove Ln", city: "Springfield", full: "1847 Maple Grove Lane, Springfield, MO 65807" },
        items: [
            { 
                id: 1, 
                title: "Walnut Credenza", 
                desc: "Mid-century, brass legs, original finish", 
                cat: "furniture", 
                story: "Mrs. Whitfield bought this in 1962 on her honeymoon trip to California.",
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
                story: "Mr. Whitfield was a woodworker for 40 years.",
                image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 4, 
                title: "Oak Dining Set", 
                desc: "Table + 6 chairs, seats 10", 
                cat: "furniture",
                image: "https://images.unsplash.com/photo-1503602642458-2321114453ad?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 5, 
                title: "Brass Floor Lamp", 
                desc: "Art deco, rewired, original shade", 
                cat: "decor",
                image: "https://images.unsplash.com/photo-1507473888900-52ea75561061?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 6, 
                title: "Cast Iron Set", 
                desc: "Lodge & Wagner, well-seasoned", 
                cat: "kitchen", 
                story: "These pans made Sunday breakfast for three generations.",
                image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 7, 
                title: "Vintage Cameras", 
                desc: "Kodak, Polaroid collection", 
                cat: "vintage",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
            },
            { 
                id: 8, 
                title: "Hand-Stitched Quilts", 
                desc: "Three quilts, embroidered linens", 
                cat: "textiles",
                image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800"
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