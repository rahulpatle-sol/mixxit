import PolicyLayout from "../components/PolicyLayout";

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy">
      <p className="mb-4 text-sm text-brown/70 font-medium uppercase tracking-wider">
        Mixxit Premixes
      </p>

      <p className="mb-6">
        Mixxit premixes are food products, so for hygiene and safety reasons we do not accept returns of opened or
        unopened boxes.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Damaged, Wrong or Missing Items</h2>
      <p className="mb-6">
        If your order arrives damaged, leaking, or you received the wrong product, we will send you a free replacement.
        To request one:
      </p>
      <ol className="list-decimal ml-6 mb-6 space-y-2 text-brown/90">
        <li>Message us on WhatsApp at <strong>+91 99848 63820</strong> within 48 hours of delivery.</li>
        <li>Share your order number and an unboxing photo or video showing the issue.</li>
        <li>Once verified, we will ship your replacement at no extra cost.</li>
      </ol>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Cancellations</h2>
      <p className="mb-6">
        You can cancel your order free of charge before it is shipped. Message us on WhatsApp with your order number.
        Once an order has been shipped, it cannot be cancelled.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Refunds</h2>
      <p className="mb-6">
        If a replacement is not possible, we will refund the amount for the affected item. Prepaid refunds are sent to
        the original payment method within 5–7 working days. For Cash on Delivery orders, refunds are made by UPI or
        bank transfer.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-bold text-brown">Need help?</h2>
      <p className="mb-6">
        WhatsApp / Call: <strong>+91 99848 63820</strong><br />
        Instagram: <strong>@mixxit_official</strong>
      </p>
    </PolicyLayout>
  );
}
