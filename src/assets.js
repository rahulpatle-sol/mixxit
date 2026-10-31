const U = "https://images.unsplash.com";
const fmt = "auto=format&fit=crop&q=75";

// ---------------------------------------------------------------
// REAL PRODUCT IMAGES: jab tu transparent PNG daale to yaha path likh de.
// Jab tak null hai, built-in pouch drawing dikhegi.
//   rose: "/images/pouch-rose.png"
// ---------------------------------------------------------------
export const POUCH_IMAGES = {
  rose: null,
  choco: null,
  haldi: null,
  makhana: null,
};

// Real logo: "/images/logo.png". null = text logo.
export const LOGO = null;

// Unsplash placeholders (baad me apni photos se replace kar dena)
export const PHOTOS = {
  mango: `${U}/photo-1584127709733-6899e4874b5b?w=640&${fmt}`,
  strawberry: `${U}/photo-1464566711850-0331b2a43050?w=640&${fmt}`,
  pineapple: `${U}/photo-1553907761-9b2f7e7c8c4a?w=640&${fmt}`,
  apple: `${U}/photo-1567306276514-4b03838fcd7a?w=640&${fmt}`,
  grapes: `${U}/photo-1522931039450-719f73b07a0c?w=640&${fmt}`,
  lifestyle1: `${U}/photo-1490645935967-10de6ba17061?w=700&${fmt}`,
  lifestyle2: `${U}/photo-1556228578-1d86d770d766?w=700&${fmt}`,
};