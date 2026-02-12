import React from "react";

function CardHero() {
  return (
    <div className=" relative w-125 h-125 flex items-center justify-center">
      {/* عکس گل*/}
      <div className="absolute left-1/2 -top-10 -translate-x-1/2 z-60 pointer-events-none">
        <img
          className="scale-110"
          src="./assets/image/plant1.png"
          alt="Planet"
          width={500}
          height={500}
        />
      </div>

      {/*کارت اصلی */}
      <div className=" card rounded-[60px] relative z-50 flex flex-col justify-end">
        {/* متن */}
        <div className=" flex flex-col gap-2 my-9 p-2 mx-10">
          <span className="text-white/75 text-[17px] font-light">
            Trendy House Plant
          </span>
          <span className="text-white/75 text-[24px] ">Calathea plant</span>
          <button
            className="cursor-pointer font-Inter text-white/75 text-[20px] border-2 border-white/50 rounded-xl w-40 h-12
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
