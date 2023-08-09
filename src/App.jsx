import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white">
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
