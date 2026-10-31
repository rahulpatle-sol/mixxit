import PolicyLayout from "../components/PolicyLayout";
import { useStore } from "../store";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function ShopPage() {
  const { lines, count } = useStore();

  return (
    <PolicyLayout title="Shop">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 sm:justify-end">
        <span className="font-medium text-brown/70">
          {count} item{count !== 1 ? "s" : ""} in cart
        </span>
      </div>

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {Object.keys(lines).length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-brown/60">Your cart is empty.</p>
        </div>
      )}
    </PolicyLayout>
  );
}
