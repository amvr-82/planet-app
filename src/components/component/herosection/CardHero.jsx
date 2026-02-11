import React from "react";

function CardHero() {
  return (
    <div className="relative w-125 h-125 flex items-center justify-center">
      {/* عکس گل*/}
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 z-60 pointer-events-none">
        <img
          className="scale-130"
          src="./assets/image/planet1.png"
          alt="Planet"
          width={500}
          height={500}
        />
      </div>

      {/* */}
      <div className="card relative z-50 flex flex-col justify-end">
        <div className="flex flex-col gap-2 my-15 mx-10">
          <span className="text-white/75 text-[17px] font-light">
            Trendy House Plant
          </span>
          <span className="text-white/75 text-[24px] ">Calathea plant</span>
          {/* با استایل های تست شده از بالا */}
          <button
            className="cursor-pointer text-white/75 text-[24px] border-2 border-white/50 rounded-[15px] w-40 h-12 
                       hover:bg-white/20 active:bg-white/40 transition-colors duration-150 z-99"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
