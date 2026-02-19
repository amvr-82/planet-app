import { useState } from "react";

export default function Footer() {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setEmail("");
  };

  return (
    <>
      <footer
        id="contact"
        className="bg-[rgb(34,44,29)] w-full flex flex-col lg:flex-row rounded-[30px_30px_0px_0px] shadow-[2px_-20px_2px_rgb(59,77,50)] mt-20 px-6 sm:px-10 py-10 gap-10"
      >
        {/* ستون راست (برند) */}
        <div className="text-white/70 w-full lg:w-[45%] lg:pl-5">
          <div className="flex items-center gap-3">
            <img
              src="/assets/icon/logo.png"
              alt="logo-img"
              width={60}
              height={60}
            />
            <span className="text-[32px] sm:text-[40px] text-white/80 font-bold">
              Planto
            </span>
          </div>

          <p className="mt-6 sm:mt-10 text-[16px] sm:text-[20px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-6 text-[18px] sm:text-[20px] mt-10 sm:mt-20 font-extrabold">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        {/* ستون وسط (لینک‌ها) */}
        <div className="text-white/70 w-full lg:w-[15%] flex flex-col items-start lg:items-center lg:justify-center text-left lg:text-center">
          <p className="font-bold text-[20px] sm:text-[22px]">Quick Link's</p>
          <nav className="flex flex-col gap-5 sm:gap-8 font-light text-white pt-5 text-[16px] sm:text-[18px]">
            <a className="hover:opacity-70 transition-opacity" href="#home">
              Home
            </a>
            <a className="hover:opacity-70 transition-opacity" href="#type">
              Plants Type
            </a>
            <a className="hover:opacity-70 transition-opacity" href="#more">
              More
            </a>
            <a className="hover:opacity-70 transition-opacity" href="#contact">
              Contact
            </a>
          </nav>
        </div>

        {/* ستون چپ (ایمیل) */}
        <div className="text-white/70 w-full lg:w-[40%] lg:pl-10">
          <span className="font-black text-[20px] sm:text-[24px]">
            For Every Update.
          </span>

          <div className="w-full rounded-[10px] border-white/70 border-2 mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center overflow-hidden gap-2 sm:gap-0 p-2 sm:p-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="flex-1 h-12 sm:h-full px-4 py-3 bg-[rgb(34,44,29)] text-white outline-none focus:bg-[rgb(34,44,29)] focus:outline-none rounded-[8px] sm:rounded-none"
            />

            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-white text-black font-bold px-4 py-3 sm:py-2 sm:m-1 rounded-[8px] sm:rounded-[5px] cursor-pointer hover:bg-white/80 active:bg-white/50 transition-colors duration-150"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </footer>

      {/* Toast (ثبت ایمیل) */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 z-[1000]">
          Successfully subscribed 🎉
        </div>
      )}
    </>
  );
}
