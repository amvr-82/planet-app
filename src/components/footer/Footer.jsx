import React from "react";

function Footer() {
  return (
    <div className="bg-[rgb(34,44,29)]   w-full flex rounded-[30px_30px_0px_0px] shadow-[2px -20px 2px rgb(59,77,50)]  mt-20 z-999 p-10 pb-15">
      {/* دیو راست فوتر */}
      <div className="text-white/70 w-[45%] ">
        <div className="flex items-center">
          {/* لوگو و اسم*/}
          <img
            src="/public/assets/icon/logo.png"
            alt="logo-img"
            width={60}
            height={60}
          />
          <span className="text-[40px] text-white/80 font-bold ">Planto</span>
        </div>
        {/* متن لورم */}
        <p className="mt-10 text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        {/* اون 3 تا علامت */}
        <div className="flex gap-15 text-[20px] mt-20 font-extrabold">
          <span>FB</span>
          <span>TW</span>
          <span>LI</span>
        </div>
      </div>
      <div className="bg-yellow-500">a</div>
      <div className="bg-green-500">b</div>
    </div>
  );
}

export default Footer;
