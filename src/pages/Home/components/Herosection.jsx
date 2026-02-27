import CardHero from "./CardHero.jsx";

export default function Herosection() {
  const rating = 3;

  return (
    <section
      id="home"
      className=" relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-40"
    >
      {/* چیدمان دسکتاپ: متن چپ + کارت سمت راست | موبایل: ستونی */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="text-white/70">
          <p className="font-semibold leading-[1.05] text-[44px] sm:text-[64px] lg:text-[80px]">
            Breath Natural
          </p>

          <p className="mt-4 text-[14px] sm:text-[16px] leading-7 max-w-[520px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <button
              type="button"
              className="cursor-pointer text-white/75 text-[18px] sm:text-[20px] border-2 border-white/50 rounded-xl w-full sm:w-40 h-12 hover:bg-white/20 active:bg-white/40 transition-colors duration-150"
            >
              Explore
            </button>

            {/* پلی + متن */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="border rounded-full cursor-pointer hover:bg-white/20 transition-colors duration-150 p-3"
                aria-label="Live demo"
              >
                <img
                  src="/assets/icon/play.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
              <p className="font-light text-[14px] cursor-pointer">
                Live Demo...
              </p>
            </div>
          </div>

          {/* کارت نظر (زیر متن) */}
          <div className="card1 rounded-[30px] w-full max-w-[340px] mt-10 lg:mt-16">
            <div className="p-6">
              {/* پروفایل */}
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img
                    src="/assets/image/me.jpeg"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <span className="text-white/80">AmirHossein</span>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-[15px] ${
                          star <= rating ? "text-yellow-400" : "text-gray-400"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/80 mt-4 text-[14px] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>
        </div>

        {/* کارت محصول (اسلایدر) */}
        <div className="flex justify-center lg:justify-end mt-10">
          <CardHero />
        </div>
      </div>
    </section>
  );
}
