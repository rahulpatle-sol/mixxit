import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { StoreProvider } from "./store";
import Navbar from "./components/Navbar";
import Stage from "./components/Stage";
import ShopSection from "./components/ShopSection";
import FruitSection from "./components/FruitSection";
import StoryReveal from "./components/StoryReveal";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import LoginModal from "./components/LoginModal";

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

  return (
    <StoreProvider>
      <Navbar />
      <main>
        <Stage />
        <ShopSection />
        {/* <FruitSection /> */}
        <StoryReveal />
        <FaqSection />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <LoginModal />
    </StoreProvider>
  );
}