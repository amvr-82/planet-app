import React from "react";
import CardHero from "./CardHero";

function Herosection() {
  return (
    <div className=" pt-100">
      <div className=" absolute right-14">
        <CardHero />
      </div>
      <div className=" text-white/70 pl-10 ">
        <p className="text-[76px] font-semibold">Breath Natural </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <button
            className="cursor-pointer font-Inter text-white/75 text-[20px] border-2 border-white/50 rounded-xl w-40 h-12
                       hover:bg-white/20 active:bg-white/40 transition-colors duration-150 z-99 mt-5"
          >
            Explore{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
