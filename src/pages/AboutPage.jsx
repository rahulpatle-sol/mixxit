import PolicyLayout from "../components/PolicyLayout";
import { scrollTo } from "../store";

export default function AboutPage() {
  return (
    <PolicyLayout title="About Mixxit">
      <div className="readable space-y-8">
        <p className="text-brown/90 leading-relaxed">
          Mixxit is built on Maa&rsquo;s handwritten recipes &mdash; haldi doodh for
          sore throats, rose milk for calm evenings, chocolate with dry fruits for
          celebrations, and makhana kheer for comfort. Every premix is sweetened with
          jaggery, never refined sugar, and ready in 30 seconds. Just stir into warm
          milk and sip well, live well.
        </p>

        <p className="text-brown/90 leading-relaxed">
          We believe in simple, honest ingredients that Maa would approve of. No
          preservatives, no artificial flavors, no refined sugar. Just real food made
          with love in Ambikapur, Chhattisgarh.
        </p>

        <div className="bg-cream/50 rounded-2xl p-8 md:p-12 border border-brown/10">
          <h3 className="mb-4 font-display text-xl font-bold text-brown">
            Our Promise
          </h3>
          <ul className="space-y-3 list-disc ml-6 text-brown/80">
            <li>Handwritten family recipes</li>
            <li>Sweetened with jaggery only</li>
            <li>No preservatives or additives</li>
            <li>Ready in 30 seconds</li>
            <li>Made in Ambikapur, CG</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo("#shop")}
            className="flex-1 rounded-full border-2 border-brown bg-orange px-8 py-4 font-display font-bold text-brown shadow-[4px_4px_0_rgba(75,46,26,0.25)] transition-all hover:bg-orange-600"
          >
            Shop Premixes
          </button>
          <a
            href="https://www.instagram.com/mixxit_official/"
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border-2 border-brown bg-white px-8 py-4 font-display font-bold text-brown shadow-[4px_4px_0_rgba(75,46,26,0.15)] transition-all hover:bg-brown hover:text-white"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </PolicyLayout>
  );
}
