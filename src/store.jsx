import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products } from "./data";

const Ctx = createContext(null);
export const useStore = () => useContext(Ctx);

export function StoreProvider({ children }) {
  const [items, setItems] = useState({});
  const [panel, setPanel] = useState(null); // "cart" | "search" | "login" | null

  const add = useCallback((id) => setItems((s) => ({ ...s, [id]: (s[id] || 0) + 1 })), []);
  const setQty = useCallback(
    (id, q) =>
      setItems((s) => {
        const n = { ...s };
        if (q <= 0) delete n[id];
        else n[id] = q;
        return n;
      }),
    []
  );

  const lines = useMemo(() => products.filter((p) => items[p.id]).map((p) => ({ ...p, qty: items[p.id] })), [items]);
  const count = lines.reduce((a, l) => a + l.qty, 0);
  const total = lines.reduce((a, l) => a + l.qty * l.price, 0);

  useEffect(() => {
    if (panel) window.__lenis?.stop();
    else window.__lenis?.start();
    const onKey = (e) => e.key === "Escape" && setPanel(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel]);

  return <Ctx.Provider value={{ lines, count, total, add, setQty, panel, setPanel }}>{children}</Ctx.Provider>;
}

export const scrollTo = (sel) => {
  if (window.__lenis) window.__lenis.scrollTo(sel, { offset: -80 });
  else document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
};
