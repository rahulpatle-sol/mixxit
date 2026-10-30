import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { StoreProvider } from "./store";
import Navbar from "./components/Navbar";
import Stage from "./components/Stage";
import ShopSection from "./components/ShopSection";
import FruitSection from "./components/FruitSection";
import StoryReveal from "./components/StoryReveal";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import LoginModal from "./components/LoginModal";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.8 });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
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
        <FruitSection />
        <StoryReveal />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <LoginModal />
    </StoreProvider>
  );
}
