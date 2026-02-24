import React from "react";
import { useState } from "react";

function PlantType() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % slides1.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides1.length) % slides1.length);

  const slides1 = [
    {
      title: "We Have Small And Best O1 Plants Collection’s",
      subtitle: "Trendy House Plant",
      image: "/assets/image/plant1.png",
    },
    {
      title: "We Have Small And Best O2 Plants Collection’s",
      subtitle: "Fresh Green Plant",
      image: "/assets/image/plant2.png",
    },
    {
      title: "We Have Small And Best O3 Plants Collection’s",
      subtitle: "Modern Home Plant",
      image: "/assets/image/plant3.png",
    },
  ];
  return (
    // این دیو اصلیه
    <div className="bg-[#1B2316] h-600">
      <div className="card1 absolute flex flex-row  top-20 mx-20 h-110 rounded-[60px] overflow-hidden p-10 ">
        {/* اسلاید فقط برای متن و دکمه */}
        <div
          className=" absolute inset-0 flex  transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides1.map((item) => (
            <div
              key={item.title}
              className=" flex flex-row w-full shrink-0  justify-start   "
            >
              {/* عکس سمت چپ */}
              <div>
                <img
                  src={item.image}
                  alt="plant-app"
                  width={400}
                  height={400}
                />
              </div>
              {/* متن و دکمه سمت راست */}
              <div className="  flex flex-col gap-2 my-9 p-2 mx-10">
                <span className="text-white/75 text-[17px] font-light">
                  {item.subtitle}
                </span>
                <span className="text-white/75 text-[24px]">{item.title}</span>
                <button
                  type="button"
                  className="cursor-pointer text-white/75 text-[18px] sm:text-[20px] border-2 border-white/50 rounded-xl w-40 h-12 hover:bg-white/20 active:bg-white/40 transition-colors duration-150"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden ">
          <div className=" relative w-[20%] h-[20%]">
            <button
              type="button"
              onClick={prev}
              className=" rounded-[100%]  cursor-pointer p-5 absolute left-0 top-1/2 -translate-y-1/2 text-white text-shadow-gray-950  text-2xl z-50"
              aria-label="Previous slide"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              className=" rounded-[100%] cursor-pointer p-5 absolute right-0 top-1/2 -translate-y-1/2 text-white text-2xl z-50"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantType;
