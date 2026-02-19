import { useState } from "react";

export default function CardHero() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Calathea plant",
      subtitle: "Trendy House Plant",
      image: "/assets/image/plant1.png",
    },
    {
      title: "Aloe Vera",
      subtitle: "Fresh Green Plant",
      image: "/assets/image/plant2.png",
    },
    {
      title: "Monstera",
      subtitle: "Modern Home Plant",
      image: "/assets/image/plant3.png",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-[520px] h-[520px] sm:h-[560px] flex items-center justify-center">
      {/* تصویر گیاه (روی کارت) */}
      <div className="absolute left-1/2 -top-8 sm:-top-10 -translate-x-1/2 z-50 pointer-events-none transition-transform duration-1000">
        <img
          src={slides[index].image}
          alt={slides[index].title}
          className="w-[320px] sm:w-[420px] lg:w-[500px] scale-[1.2] object-contain"
          width={500}
          height={500}
        />
      </div>

      {/* کارت اصلی (blur + border) */}
      <div className="card rounded-[77px] relative flex flex-col justify-end overflow-hidden">
        {/* اسلاید فقط برای متن و دکمه */}
        <div
          className="absolute inset-0 flex transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((item) => (
            <div
              key={item.title}
              className="w-full shrink-0 flex flex-col justify-end"
            >
              <div className="flex flex-col gap-2 my-9 p-2 mx-10">
                <span className="text-white/75 text-[17px] font-light">
                  {item.subtitle}
                </span>
                <span className="text-white/75 text-[24px]">{item.title}</span>
                <button
                  type="button"
                  className="cursor-pointer text-white/75 text-[18px] sm:text-[20px] border-2 border-white/50 rounded-xl w-40 h-12 hover:bg-white/20 active:bg-white/40 transition-colors duration-150"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* دات‌های اسلاید */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {slides.map((_, i) => (
            <button
              key={slides[i].title}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ease-in-out duration-500 ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* فلش‌های اسلاید */}
        <button
          type="button"
          onClick={prev}
          className="cursor-pointer p-5 absolute left-0 top-1/2 -translate-y-1/2 text-white text-2xl z-50"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          className="cursor-pointer p-5 absolute right-0 top-1/2 -translate-y-1/2 text-white text-2xl z-50"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}
