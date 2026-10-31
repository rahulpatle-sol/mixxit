import PolicyLayout from "../components/PolicyLayout";
import { useStore } from "../store";

export default function CartPage() {
  const { lines, count, total, setQty } = useStore();

  return (
    <PolicyLayout title="Your Cart">
      {count === 0 ? (
        <div className="text-center py-20">
          <p className="mb-4 text-brown/70 font-medium">Your cart is empty</p>
          <p className="text-sm text-brown/50">Add some premixes to get started.</p>
        </div>
      ) : (
        <>
          <div className="mb-8 border-b border-brown/10 pb-4">
            <h2 className="font-display text-xl font-bold text-brown">
              Order Summary ({count})
            </h2>
          </div>

          <div className="space-y-6 mb-10">
            {Object.entries(lines).map(([id, qty]) => {
              const p = lines.find((item) => item.id === id);
              if (!p) return null;
              return (
                <div
                  key={id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brown/5 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-brown">{p.name}</span>
                    <span className="text-brown/60 text-sm">
                      ₹{p.price} × {qty}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQty(id, qty - 1)}
                      className="w-8 h-8 rounded-full border border-brown/30 flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors"
                      aria-label={`Remove ${p.name}`}
                    >
                      −
                    </button>
                    <span className="font-bold text-brown">{qty}</span>
                    <button
                      onClick={() => setQty(id, qty + 1)}
                      className="w-8 h-8 rounded-full border border-brown/30 flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors"
                      aria-label={`Add ${p.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-brown/10 pt-6 mb-10">
            <span className="font-bold text-brown">Total</span>
            <span className="font-display font-bold text-orange">₹{total}</span>
          </div>

          <button
            className="w-full rounded-full border-2 border-brown bg-orange px-8 py-4 font-display font-bold text-brown shadow-[4px_4px_0_rgba(75,46,26,0.25)] transition-all hover:bg-orange-600 hover:scale-[1.02] active:shadow-none active:translate-y-[2px]"
          >
            Checkout
          </button>

          <p className="mt-6 text-center text-sm text-brown/50">
            Cash on Delivery available on most pin codes.
          </p>
        </>
      )}
    </PolicyLayout>
  );
}
