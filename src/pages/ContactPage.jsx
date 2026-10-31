import PolicyLayout from "../components/PolicyLayout";
import { scrollTo } from "../store";

export default function ContactPage() {
  return (
    <PolicyLayout title="Contact Us">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-display text-xl font-bold text-brown">
            Get in touch
          </h2>
          <p className="text-brown/70 leading-relaxed">
            Have a question about our premixes, an order, or just want to say hello?
            We&rsquo;d love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange">📞</span>
              <div>
                <p className="font-semibold text-brown">WhatsApp / Call</p>
                <a
                  href="https://wa.me/919984863820"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange hover:underline text-sm"
                >
                  +91 99 8486 3820
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange">✉️</span>
              <div>
                <p className="font-semibold text-brown">Email</p>
                <a
                  href="mailto:mixxitpremix@gmail.com"
                  className="text-orange hover:underline text-sm"
                >
                  mixxitpremix@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange">📍</span>
              <div>
                <p className="font-semibold text-brown">Address</p>
                <p className="text-sm text-brown/70">
                  Mahamaya Chowk, Ambikapur, Rk Video, Mahamaya Chowk, 497001 Ambikapur
                  CG, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange">📱</span>
              <div>
                <p className="font-semibold text-brown">Instagram</p>
                <a
                  href="https://www.instagram.com/mixxit_official/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange hover:underline text-sm"
                >
                  @mixxit_official
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cream/50 rounded-2xl p-8 md:p-12 border border-brown/10">
          <h3 className="mb-6 font-display text-xl font-bold text-brown">
            Order Help
          </h3>
          <p className="mb-4 text-brown/80 leading-relaxed">
            Need help with an existing order? Message us on WhatsApp with your order
            number and we&rsquo;ll help right away.
          </p>
          <ul className="space-y-3 text-brown/80 text-sm">
            <li>• Damaged or wrong item? We&rsquo;ll send a free replacement.</li>
            <li>• Cancel before shipping &mdash; free of charge.</li>
            <li>• Refunds within 5&ndash;7 working days (prepaid).</li>
            <li>• COD refunds via UPI or bank transfer.</li>
          </ul>
          <div className="mt-6 pt-6 border-t border-brown/10">
            <p className="text-sm text-brown/60">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => scrollTo("body")}
          className="rounded-full border-2 border-brown bg-orange px-10 py-4 font-display font-bold text-brown shadow-[4px_4px_0_rgba(75,46,26,0.25)] transition-all hover:bg-orange-600"
        >
          Back to Home
        </button>
      </div>
    </PolicyLayout>
  );
}
