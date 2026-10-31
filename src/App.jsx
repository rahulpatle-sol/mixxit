import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { StoreProvider } from "./store";
import Navbar from "./components/Navbar";
import Stage from "./components/Stage";
import ShopSection from "./components/ShopSection";
import StoryReveal from "./components/StoryReveal";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import LoginModal from "./components/LoginModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

export default function App() {
  useEffect(() => {
    // Font/image load hone ke baad layout badalta hai, isliye triggers refresh karte hain
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("load", refresh);
    }

    // Smooth scroll: Lenis ek hi jagah smoothing karta hai. scrub values chhote rakhe hain
    // taaki double smoothing (laggy feel) na ho.
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  const HomePage = () => (
    <main>
      <Stage />
      <ShopSection />
      {/* <FruitSection /> */}
      <StoryReveal />
      <FaqSection />
    </main>
  );

  // Route change pe smoothly upar le jao (Lenis se)
  const location = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <StoreProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <LoginModal />
    </StoreProvider>
  );
}