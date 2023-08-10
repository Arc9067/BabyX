import React, { useRef } from "react";
import { ImCopy } from "react-icons/im";
import logo from "../assets/logo.svg";
import Marquee from "react-fast-marquee";
import x from "../assets/x.svg";
import baby from "../assets/baby.svg";

const TOKENOMICS = () => {
  const copy = useRef(null);
  return (
    <section  className="w-full pt-16 bgw" id="TOKENOMICS">
      <div id="about-wrapper" className="container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-5">
          <h1 className="text-white about-text flex items-center gap-6 text-5xl font-normal">
            MEET <img src={baby} alt="" className="w-[12rem]" />
          </h1>

          <p className=" text-white about-text text-2xl font-normal leading-10">
            The BabyX token was made to make the community have more fun
            together. This idea came after people got excited about Elon Musk
            changing Twitter to X. Since the X token did well, now it's BabyX’s
            turn. BabyX wants to help people connect and create a lively social
            place where they can meet, enjoy themselves, and talk to each other
            in a good way.
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
        <img src={x} alt="" className="mx-auto animate-spin about-image" />
      </div>
      <Marquee className="w-full mt-10 bg-rose-500 flex">
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
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
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
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
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
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
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
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
      </Marquee>
    </section>
  );
};

export default TOKENOMICS;
