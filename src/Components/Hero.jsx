import React from "react";
import logo from "../assets/logo.svg";
import baby from "../assets/baby.svg";
const Hero = () => {
  return (
    <section className="pt-20 w-full" id="hero">
      <div className="container flex flex-col justify-center items-center gap-6">
        <h1 className="text-white flex items-center gap-4 text-6xl font-normal leading-[90px]">
          MEET <img src={baby} alt="" className="w-[12rem]" />
        </h1>
        {/* <p className="max-w-[493px] text-center text-white text-xl font-normal leading-loose">
          Feel the combined power of the Hilarious pepe token and the Origin of
          Crypto, BITCOIN !
        </p> */}
        <a
          href=""
          className="w-[199px] h-[57px] pb-[3px] bg-white rounded-full justify-center items-center inline-flex"
        >
          <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-amber-500 rounded-full shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              JOIN US
            </div>
          </div>
        </a>
        <img src={logo} alt="" />
      </div>
      <div className="w-full mt-10 pt-8 pb-[30px] bg-rose-500 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ABOUT</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ABOUT</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ABOUT</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ABOUT</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ABOUT</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ABOUT</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
