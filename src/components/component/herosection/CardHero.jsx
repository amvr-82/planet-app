import React from "react";

function CardHero() {
  return (
    <div className="relative  w-125 h-125 flex items-center justify-center">
      {/* عکس گل */}
      <div>
        <img
          className="absolute left-1/2 -top-45 
         -translate-x-1/2 
          scale-100 z-50 pointer-events-none"
          src="./assets/image/planet1.png"
          alt="Planet"
          width={410}
          height={410}
        />
      </div>

      {/* کارت اصلی */}
      <div className=" card relative z-0   flex flex-col justify-end ">
        <div className="  flex flex-col gap-2 my-15 mx-10">
          <span className="text-white/75 text-[24px] font-medium">
            Trendy House Plant
          </span>
          <span className="text-white/75 text-[48px] font-light">
            Calathea plant
          </span>
          <button className="cursor-pointer text-white/75 text-[24px] border-2 border-white/50 rounded-[15px] w-40 h-12 ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
