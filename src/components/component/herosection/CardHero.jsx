import React from "react";

function CardHero() {
  return (
    <div className="relative w-125 h-125">
      {/* عکس گل */}
      <img
        className="absolute -top-30   z-50"
        src="./assets/image/planet1.png"
        alt="Planet"
        width={500}
        height={500}
      />

      {/* کارت اصلی */}
      <div className="card relative z-0 w-full h-full bg-white/5 backdrop-blur-[15px] rounded-[60px]   flex flex-col justify-end">
        {/* Card Content */}
        <div className="flex flex-col gap-2 ">
          <span className="text-white/75 text-[24px]">Trendy House Plant</span>
          <span className="text-white/75 text-[48px] font-bold">
            Calathea plant
          </span>
          <button className="text-white/75 text-[24px] border-2 border-white/50 rounded-[15px] w-40 h-12 hover:bg-white/10 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
