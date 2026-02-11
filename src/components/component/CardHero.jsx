import React from "react";

function CardHero() {
  return (
    <div className="relative">
      <img
        className="scale-120 transform-gpu absolute 
        -top-15 left-1/2 -translate-x-1/2 z-100 "
        src="./assets/image/planet1.png"
        alt=""
        width={900}
        height={900}
      />

      <div className="card relative z-0"></div>
    </div>
  );
}

export default CardHero;
