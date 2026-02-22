import Herosection from "../components/component/herosection/Herosection";
import Call from "../components/component/others/Call";

export default function Home() {
  return (
    <div className="md:pt-100 pb-100 back-img ">
      <Herosection />
      <Call />

      {/* کارت بزرگ 1 زیر Hero */}
      <div
        id="type"
        className=" card1  rounded-[60px] sm:rounded-[70px] w-[90%] max-w-[1200px] mx-auto mt-24 lg:mt-80"
      >
        <div className="flex flex-col lg:flex-row items-center justify-around gap-10 px-6 sm:px-10 py-12 lg:py-0 lg:h-80">
          {/* عکس (روی موبایل وسط میاد، روی دسکتاپ همون حالت قبلی رو حفظ می‌کنه) */}
          <div className="pointer-events-none -mt-20 sm:-mt-28 lg:-mt-40 lg:-ml-20">
            <img
              src="/assets/image/plant2.png"
              alt="Plant"
              className="w-[240px] sm:w-[320px] lg:w-[400px] "
              width={400}
            />
          </div>

          {/* متن + دکمه‌ها */}
          <div className="text-white/70 flex flex-col gap-5 lg:pr-10 text-center lg:text-left relative z-10">
            <p className="text-[24px] sm:text-[30px] font-bold">
              For Small Decs Ai Plat
            </p>
            <p className="text-[14px] sm:text-[15px] font-medium leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="text-[24px] sm:text-[30px] font-bold">Rs. 599/-</p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button className="cursor-pointer text-white/75 text-[18px] sm:text-[20px] border-2 border-white/50 rounded-xl w-full sm:w-40 h-12 hover:bg-white/20 active:bg-white/40 transition-colors duration-150">
                Buy Now
              </button>

              <button
                type="button"
                className="border-2 rounded-xl px-4 py-3 border-white/50 hover:bg-white/20 active:bg-white/40 transition-colors duration-150"
                aria-label="Add to bag"
              >
                <img src="/assets/icon/bag.svg" alt="" width={22} height={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* کارت بزرگ 2 زیر کارت اول */}
      <div
        id="more"
        className="card1 rounded-[60px] sm:rounded-[90px] w-[90%] max-w-[1200px] mx-auto mt-14  lg:mt-52"
      >
        <div className="flex flex-col lg:flex-row-reverse items-center justify-around gap-10 px-6 sm:px-10 py-12 lg:py-0 lg:h-80">
          {/* عکس */}
          <div className="pointer-events-none -mt-20 sm:-mt-28 lg:-mt-40 lg:-ml-20">
            <img
              src="/assets/image/plant3.png"
              alt="Plant"
              className="w-[240px] sm:w-[320px] lg:w-[400px] "
              width={400}
            />
          </div>

          {/* متن + دکمه‌ها */}
          <div className="text-white/70 flex flex-col gap-5 lg:pr-10 text-center lg:text-left relative z-10">
            <p className="text-[24px] sm:text-[30px] font-bold">
              For Fresh Decs Ai Plat
            </p>
            <p className="text-[14px] sm:text-[15px] font-medium leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="text-[24px] sm:text-[30px] font-bold">Rs. 599/-</p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button className="cursor-pointer text-white/75 text-[18px] sm:text-[20px] border-2 border-white/50 rounded-xl w-full sm:w-40 h-12 hover:bg-white/20 active:bg-white/40 transition-colors duration-150">
                Buy Now
              </button>

              <button
                type="button"
                className="border-2 rounded-xl px-4 py-3 border-white/50 hover:bg-white/20 active:bg-white/40 transition-colors duration-150"
                aria-label="Add to bag"
              >
                <img src="/assets/icon/bag.svg" alt="" width={22} height={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
