// Placeholder prices (INR). Swap with Shopify Storefront data later.
export const products = [
  {
    id: "rose",
    name: "Rose Petal Premix",
    price: 249,
    color: "#d9738b",
    label: "Rose",
    desc: "Soft rose petals and jaggery for a calm, sweet cup.",
    stickers: ["natural", "love"],
  },
  {
    id: "choco",
    name: "Choco Dryfruit Premix",
    price: 299,
    color: "#8a4b2b",
    label: "Choco",
    desc: "Rich chocolate with crunchy dry fruits, sweetened with jaggery.",
    stickers: ["natural", "preservatives", "love"],
  },
  {
    id: "haldi",
    name: "Haldi Premix",
    price: 199,
    color: "#e8a33d",
    label: "Haldi",
    desc: "Golden turmeric and jaggery, just like Maa's warm glass.",
    stickers: ["natural", "jaggery", "love"],
  },
  {
    id: "makhana",
    name: "Makhana Premix",
    price: 279,
    color: "#efe2c0",
    label: "Makhana",
    desc: "Creamy popped makhana and jaggery, comfort in a glass.",
    stickers: ["natural", "jaggery"],
  },
];

export const colorById = Object.fromEntries(products.map((p) => [p.id, p.color]));
