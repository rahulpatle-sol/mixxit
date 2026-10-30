import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { StoreProvider } from "./store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import LoginModal from "./components/LoginModal";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis();
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
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
        <Hero />
        <Story />
        <Marquee />
        <Products />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <LoginModal />
    </StoreProvider>
  );
}
