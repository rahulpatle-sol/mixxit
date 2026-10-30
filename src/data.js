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

export const fruitSnacks = [
  {
    id: "mango",
    name: "Mango Fruit Snack",
    price: 199,
    color: "#f4a261",
    label: "Mango",
    desc: "Juicy sun-ripened mango strips, chewy and bright.",
    stickers: ["fruit", "natural"],
  },
  {
    id: "strawberry",
    name: "Strawberry Fruit Snack",
    price: 229,
    color: "#e76f51",
    label: "Strawberry",
    desc: "Tart-sweet strawberry bites, dried at peak freshness.",
    stickers: ["fruit", "natural"],
  },
  {
    id: "pineapple",
    name: "Pineapple Fruit Snack",
    price: 189,
    color: "#e9c46a",
    label: "Pineapple",
    desc: "Tropical pineapple chunks with a zesty kick.",
    stickers: ["fruit", "natural"],
  },
  {
    id: "apple",
    name: "Apple Fruit Snack",
    price: 179,
    color: "#2a9d8f",
    label: "Apple",
    desc: "Crisp apple slices, lightly sweetened with jaggery.",
    stickers: ["fruit", "jaggery"],
  },
  {
    id: "grapes",
    name: "Grape Fruit Snack",
    price: 219,
    color: "#6a0dad",
    label: "Grapes",
    desc: "Plump dried grapes bursting with berry sweetness.",
    stickers: ["fruit", "natural"],
  },
];
