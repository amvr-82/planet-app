import React from "react";
import CardHero from "./CardHero";

function Herosection() {
  const rating = 4;
  return (
    <div className=" pt-100">
      {/* دیو کارت محصول */}
      <div className=" absolute right-0">
        <CardHero />
      </div>
      {/* دیو جزییات سمت چپ */}
      <div className=" text-white/70 pl-15 mt-10 ">
        <p className="text-[80px] font-semibold">Breath Natural </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        {/* دیو جززیات زیر لورم */}
        <div className="  flex mt-5 flex-row">
          <button
            className="cursor-pointer font-Inter text-white/75 text-[20px] border-2 border-white/50 rounded-xl w-40 h-12
                       hover:bg-white/20 active:bg-white/40 transition-colors duration-150 z-99 "
          >
            Explore{" "}
          </button>
          {/* دیو دکمه پلی و متنش */}
          <div className="flex  flex-row mx-5 items-center">
            <div className="border rounded-[100px] cursor-pointer  hover:bg-white/20 transition-colors duration-150 ">
              <img
                className="m-2 ml-3"
                src="./assets/icon/play.svg"
                alt="play-icon"
                width={20}
                height={20}
              />
            </div>
            <p className="font-light px-2 text-[14px] cursor-pointer ">
              Live Demo...
            </p>
          </div>
        </div>
      </div>
      {/* دیو کارت نظرات */}
      <div className="card1 h-50 w-80 ml-30 mt-20">
        {/* دیو پروفایل */}
        <div className=" flex mx-4 my-6">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/assets/image/me.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mx-2">
            <span className="text-white/80">AmirHossein</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-[15px]  ${
                    star <= rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-white/80 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>
      </div>
    </div>
  );
}

export default Herosection;
