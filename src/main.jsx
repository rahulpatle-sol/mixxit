import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "./index.css";
import { preloadImages } from "./assets";
import App from "./App.jsx";

preloadImages();

createRoot(document.getElementById("root")).render(<App />);
