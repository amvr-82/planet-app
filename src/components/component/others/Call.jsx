import Lottie from "lottie-react";
import calling from "/public/assets/icon/call2.json";

function Call() {
  return (
    <div className="fixed bottom-0 right-0 sm:right-4 z-50 cursor-pointer group">
      <div className="absolute inset-0 rounded-full bg-white blur-[30px] opacity-40 group-hover:bg-green-700/70 transition"></div>

      <Lottie
        animationData={calling}
        loop
        autoplay
        className="relative w-25 h-25 sm:w-24 sm:h-24"
      />
    </div>
  );
}

export default Call;
