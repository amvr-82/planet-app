import React, { useState } from "react";

function Footer() {
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
      <div className="bg-[rgb(34,44,29)] w-full flex rounded-[30px_30px_0px_0px] shadow-[2px_-20px_2px_rgb(59,77,50)] mt-20 p-10 pb-15 gap-10">
        {/* دیو راست فوتر */}
        <div className="text-white/70 w-[45%] pl-5">
          <div className="flex items-center gap-3">
            <img
              src="/public/assets/icon/logo.png"
              alt="logo-img"
              width={60}
              height={60}
            />
            <span className="text-[40px] text-white/80 font-bold">Planto</span>
          </div>
          <p className="mt-10 text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-6 text-[20px] mt-20 font-extrabold">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        {/* دیو وسط فوتر */}
        <div className="text-white/70 w-[15%] flex flex-col items-center justify-center text-center">
          <p className="font-bold text-[22px]">Quick Link’s</p>
          <nav className="flex flex-col gap-10 font-light text-white pt-5 text-[18px] items-center">
            <a className="hover:opacity-70 transition-opacity" href="home">
              Home
            </a>
            <a className="hover:opacity-70 transition-opacity" href="type">
              Plants Type
            </a>
            <a className="hover:opacity-70 transition-opacity" href="more">
              More
            </a>
            <a className="hover:opacity-70 transition-opacity" href="contact">
              Contact
            </a>
          </nav>
        </div>

        {/* دیو چپ فوتر */}
        <div className="text-white/70 pl-20 w-[40%]">
          <span className="font-black text-[24px]">For Every Update.</span>
          <div className="w-full rounded-[10px] border-white/70 border-2 mt-10 flex items-center overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="flex-1 h-full px-4 bg-[rgb(34,44,29)] text-white outline-none focus:bg-[rgb(34,44,29)] focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-white text-black font-bold px-4 py-2 m-1 rounded-[5px] cursor-pointer hover:bg-white/80 active:bg-white/50 transition-colors duration-150"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* الرت ثبت ایمیل */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
          Successfully subscribed 🎉
        </div>
      )}
    </>
  );
}

export default Footer;
