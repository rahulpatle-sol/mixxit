// Placeholder prices (INR). Swap with Shopify Storefront data later.
export const products = [
  { id: "rose", name: "Rose Petal Premix", tag: "A cup of calm", price: 249, color: "#d9738b", label: "Rose", desc: "Soft rose petals and jaggery for a calm, sweet cup.", stickers: ["natural", "love"] },
  { id: "choco", name: "Choco Dryfruit Premix", tag: "Rich, nutty, wholesome", price: 299, color: "#8a4b2b", label: "Choco", desc: "Rich chocolate with crunchy dry fruits, sweetened with jaggery.", stickers: ["natural", "preservatives", "love"] },
  { id: "haldi", name: "Haldi Premix", tag: "Maa's golden comfort", price: 199, color: "#e8a33d", label: "Haldi", desc: "Golden turmeric and jaggery, just like Maa's warm glass.", stickers: ["natural", "jaggery", "love"] },
  { id: "makhana", name: "Makhana Premix", tag: "Light, creamy, cosy", price: 279, color: "#d9c89a", label: "Makhana", desc: "Creamy popped makhana and jaggery, comfort in a glass.", stickers: ["natural", "jaggery"] },
];

export const fruitSnacks = [
  { id: "mango", name: "Mango Fruit Snack", tag: "Sunshine in a bite", price: 199, color: "#f4a261", label: "Mango", desc: "Juicy sun-ripened mango strips, chewy and bright.", stickers: ["fruit", "natural"] },
  { id: "strawberry", name: "Strawberry Fruit Snack", tag: "Tart, sweet, bright", price: 229, color: "#e76f51", label: "Strawberry", desc: "Tart-sweet strawberry bites, dried at peak freshness.", stickers: ["fruit", "natural"] },
  { id: "pineapple", name: "Pineapple Fruit Snack", tag: "A zesty little holiday", price: 189, color: "#e9c46a", label: "Pineapple", desc: "Tropical pineapple chunks with a zesty kick.", stickers: ["fruit", "natural"] },
  { id: "apple", name: "Apple Fruit Snack", tag: "Crisp and gently sweet", price: 179, color: "#7bb661", label: "Apple", desc: "Crisp apple slices, lightly sweetened with jaggery.", stickers: ["fruit", "jaggery"] },
  { id: "grapes", name: "Grape Fruit Snack", tag: "Berry sweet", price: 219, color: "#8a5fb0", label: "Grapes", desc: "Plump dried grapes bursting with berry sweetness.", stickers: ["fruit", "natural"] },
];

export const allProducts = [...products, ...fruitSnacks];
export const colorById = Object.fromEntries(allProducts.map((p) => [p.id, p.color]));