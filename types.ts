export interface Item {
  id: number;
  title: string;
  desc: string;
  cat: string;
  story?: string;
  image: string;
}

export interface SaleDate {
  day: string;
  date: string;
  time: string;
}

export interface Sale {
  name: string;
  hook: string;
  highlights: string[];
  counts: { shown: number; total: number };
  dates: SaleDate[];
  saleDate: string;
  address: { short: string; city: string; full: string };
  items: Item[];
}

export interface Testimonial {
  quote: string;
  name: string;
  loc: string;
  ctx: string;
  init: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  sub?: string;
  s?: string;
  d: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface AppData {
  config: {
    name: string;
    legalName?: string;
    phone: string;
    email: string;
    tagline?: string;
    url?: string;
    area: string;
    areaShort?: string;
    baseCity?: string;
    // Prestigious neighborhoods for local SEO
    serviceNeighborhoods?: string[];
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    geo?: {
      lat: number;
      lng: number;
    };
    openingHours?: string[];
    foundingDate?: string;
    logo?: string;
    image?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    stats: { families: number; saleMin: number; saleMax: number };
    owner: string;
    creds: string;
    services?: string[];
  };
  sale: Sale;
  testimonials: Testimonial[];
  sellerProcess: ProcessStep[];
  shopperSteps: ProcessStep[];
  faqs: FAQ[];
}