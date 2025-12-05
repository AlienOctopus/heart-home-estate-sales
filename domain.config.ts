// ============================================================================
// DOMAIN CONFIGURATION - THE ONLY PLACE YOU SET YOUR DOMAIN
// ============================================================================
// Set your production domain here. The build process automatically injects
// this into index.html, robots.txt, sitemap.xml, and all other files.
//
// IMPORTANT: Always use the www. prefix for consistency.
// Example: "www.heartandhomeestatesales.com"
// ============================================================================

export const SITE_DOMAIN = "www.heartandhomeestatesales.com";

// Derived values (don't edit these)
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const EMAIL_DOMAIN = SITE_DOMAIN.replace(/^www\./, "");
