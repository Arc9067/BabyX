import React, { useRef } from "react";
import { ImCopy } from "react-icons/im";
import logo from "../assets/logo.svg";
import x from "../assets/x.svg";
import baby from "../assets/baby.svg";

const About = () => {
  const copy = useRef(null);
  return (
    <section className="w-full pt-16 bgw" id="about">
      <div className="container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-5">
          <h1 className="text-white flex items-center gap-6 text-5xl font-normal">
            MEET <img src={baby} alt="" className="w-[12rem]" />
          </h1>

          <p className=" text-white text-2xl font-normal leading-10">
            BABYX token was developed with the aim of enhancing the overall
            enjoyment of the community. BABYX is dedicated to fostering
            connections and creating a vibrant social environment where people
            can come together, have a great time, and engage in entertaining
            activities and social events.
          </p>
          <div
            onClick={async () => {
              let previous = copy.current.innerHTML;
              let copying = await navigator.clipboard.writeText("0x00000000");
              copy.current.innerHTML = "Ca Copied";
              setTimeout(() => {
                copy.current.innerHTML = `COPY CA `;
              }, 3000);
            }}
            className="w-[215px] cursor-pointer h-[54px] px-8 py-4 bg-white rounded shadow border border-amber-300 justify-center items-center gap-2.5 inline-flex"
          >
            <div
              ref={copy}
              className="text-black flex justify-center items-center gap-3 text-base font-bold leading-snug tracking-tight"
            >
              COPY CA <ImCopy />
            </div>
          </div>
        </article>
        <img src={x} alt="" className="mx-auto animate-spin" />
      </div>
      <div className="w-full pt-8 mt-10 pb-[30px] bg-rose-500 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">TOKENOMICS</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">TOKENOMICS</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">TOKENOMICS</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">TOKENOMICS</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">TOKENOMICS</div>
        </div>{" "}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative bg-white rounded-full" />
          <div className="text-white text-3xl font-normal">TOKENOMICS</div>
        </div>
      </div>
    </section>
  );
};

export default About;
