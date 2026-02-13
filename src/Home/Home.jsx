import Header from "../components/header/Header";
import Herosection from "../components/component/herosection/Herosection";
import Call from "../components/component/others/Call";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Call />
      {/* دیو کرات بزرگ زیر هدینگ */}
      <div className="flex card1 rounded-[90px] w-[90%] h-80 ml-auto mr-auto mt-80 justify-around ">
        {/* دیو عکس */}
        <div className="z-50 -mt-40 -ml-20  pointer-events-none">
          <img src="./public\assets\image\plant2.png" alt="" width={400} />
        </div>
        {/* دیو متناا و دکمه */}
        <div className=" text-white/70 pr-10 flex gap-5 flex-col mt-8">
          <p className="text-[30px] font-bold">For Small Decs Ai Plat</p>
          <p className="text-[15px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-[30px] font-bold">Rs. 599/-</p>
          {/* دوتا دکمه توی سکند کارت */}
          <div className="flex gap-5">
            <button className="cursor-pointer text-white/75 text-[20px] border-2 border-white/50 rounded-xl w-40 h-12 hover:bg-white/20 active:bg-white/40 transition-colors duration-150 z-99">
              Buy Now
            </button>
            <img
              className="border-2 rounded-xl px-3  border-white/50  hover:bg-white/20 active:bg-white/40 transition-colors duration-150 z-99"
              src="public\assets\icon\bag.svg"
              alt="bag-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
