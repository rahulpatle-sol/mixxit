export const ASSETS = {
  logo: "/images/logo.png",
  rose: "/images/pouch-rose.png",
  choco: "/images/pouch-choco.png",
  haldi: "/images/pouch-haldi.png",
  makhana: "/images/pouch-makhana.png",
  lifestyle1: "/images/lifestyle-1.jpg",
  lifestyle2: "/images/lifestyle-2.jpg",
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
