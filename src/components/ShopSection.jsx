import { products } from "../data";
import ProductSection from "./ProductSection";

export default function ShopSection() {
  return (
    <ProductSection
      id="shop"
      title="Pick your favourite sip"
      sub="Jaggery sweet. Ready in 30 seconds."
      items={products}
    />
  );
}