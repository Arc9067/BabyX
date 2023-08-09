import React from "react";
import mics from "../assets/mics.svg";

const Mics = () => {
  return (
    <section className="w-full pt-16 bgw" id="mics">
      <div className="container flex justify-center items-center">
        <img src={mics} alt="" className="pointer-events-none" />
      </div>

      <div className="w-full pt-8 mt-10 pb-[30px] bg-rose-500 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ROADMAP</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ROADMAP</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ROADMAP</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ROADMAP</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ROADMAP</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">ROADMAP</div>
        </div>
      </div>
    </section>
  );
};

export default Mics;
