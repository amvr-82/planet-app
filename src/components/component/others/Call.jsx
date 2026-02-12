import React from "react";
import Lottie from "lottie-react";
import calling from "/public/assets/icon/call2.json";

function Call() {
  return (
    <div className="fixed bottom-3 right-2 z-50 cursor-pointer group">
      <div className="absolute inset-0 rounded-full bg-green-800/50 blur-[10px] opacity-40 group-hover:bg-green-700/70 transition"></div>

      <Lottie
        animationData={calling}
        loop
        autoplay
        className="relative w-24 h-24"
      />
    </div>
  );
}

export default Call;
