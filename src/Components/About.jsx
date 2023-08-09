import React, { useRef } from "react";
import { ImCopy } from "react-icons/im";
import logo from "../assets/logo.svg";
import Marquee from "react-fast-marquee";

const TOKENOMICS = () => {
  const copy = useRef(null);
  return (
    <section className="w-full pt-16 bgw" id="TOKENOMICS">
      <div className="container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-5">
          <h1 className="text-white text-5xl font-normal">MEET BABYX</h1>
          <h1 className="max-w-[575px] text-white text-5xl font-normal">
            Comic with the CommunityAs The Core
          </h1>
          <p className=" text-white text-2xl font-normal leading-10">
            We will make a 5 story part for this comic book with the help of the
            community in the form of Story Plot competition ! The detail will be
            shared on the telegram group.And please read #Issue 1 : Prologue -
            The Awakening
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
        <img src={logo} alt="" className="mx-auto" />
      </div>
      <Marquee className="w-full mt-10 bg-rose-500">
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
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
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
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
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
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
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-2 lg:grid-cols-6 px-3 md:grid-cols-4 grid-rows-1 overflow-hidden">
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
