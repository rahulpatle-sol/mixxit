import PolicyLayout from "../components/PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy">
      <p className="mb-4 text-sm text-brown/70 font-medium uppercase tracking-wider">
        Shipping across India
      </p>

      <p className="mb-6">
        We currently ship across India from Ambikapur, Chhattisgarh.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Shipping Charges</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1 text-brown/90">
        <li>Free shipping on all orders of ₹699 and above.</li>
        <li>A flat ₹60 delivery charge applies to orders below ₹699.</li>
      </ul>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Dispatch and Delivery Time</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1 text-brown/90">
        <li>Orders are packed and dispatched within 1–2 working days.</li>
        <li>Delivery usually takes 3–5 working days within Chhattisgarh and 5–8 working days for the rest of India.</li>
        <li>You will receive a tracking link by SMS/WhatsApp once your order is shipped.</li>
      </ul>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Cash on Delivery</h2>
      <p className="mb-6">
        Cash on Delivery is available on most pin codes. Please keep the exact amount ready at the time of delivery.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Delays</h2>
      <p className="mb-6">
        Deliveries may occasionally be delayed due to weather, festivals or courier issues. If your order has not
        arrived within the expected time, message us on WhatsApp at <strong>+91 99848 63820</strong> and we will help
        right away.
      </p>
    </PolicyLayout>
  );
}
