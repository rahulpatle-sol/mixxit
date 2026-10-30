const UNSPLASH = "https://images.unsplash.com";

export const ASSETS = {
  logo: "/images/logo.png",
  rose: `${UNSPLASH}/photo-1513394468815-6922e81398bd?w=400&h=560&fit=crop&q=80`,
  choco: `${UNSPLASH}/photo-1511693243241-2e554891e1c7?w=400&h=560&fit=crop&q=80`,
  haldi: `${UNSPLASH}/photo-1600891964599-f61ba0e24092?w=400&h=560&fit=crop&q=80`,
  makhana: `${UNSPLASH}/photo-1534682798877-1e21393e3f20?w=400&h=560&fit=crop&q=80`,
  mango: `${UNSPLASH}/photo-1584127709733-6899e4874b5b?w=400&h=560&fit=crop&q=80`,
  strawberry: `${UNSPLASH}/photo-1464566711850-0331b2a43050?w=400&h=560&fit=crop&q=80`,
  pineapple: `${UNSPLASH}/photo-1553907761-9b2f7e7c8c4a?w=400&h=560&fit=crop&q=80`,
  apple: `${UNSPLASH}/photo-1567306276514-4b03838fcd7a?w=400&h=560&fit=crop&q=80`,
  grapes: `${UNSPLASH}/photo-1522931039450-719f73b07a0c?w=400&h=560&fit=crop&q=80`,
  lifestyle1: `${UNSPLASH}/photo-1490645935967-10de6ba17061?w=800&fit=crop&q=80`,
  lifestyle2: `${UNSPLASH}/photo-1556228578-1d86d770d766?w=800&fit=crop&q=80`,
};

export function pouchSrc(id) {
  return ASSETS[id];
}

export function preloadImages() {
  if (typeof document === "undefined") return;
  Object.values(ASSETS).forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}
