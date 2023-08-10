import React, { useRef } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import useSmoothScroll from "./utils/useSmoothScroll";
import { useAnimation } from "./utils/useAnimations";

const App = () => {
  const containerRef = useRef();
  useSmoothScroll();
  useAnimation(containerRef)
  return (
    <div ref={containerRef} className="min-h-screen w-full relative bg-black text-white">
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
