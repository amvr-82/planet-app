export default function Header() {
  return (
    <div className="fixed items-center top-0 w-full h-20 z-999">
      {/* خود هدر*/}
      <div className="absolute inset-0 flex items-center  align-middle  px-6 z-10">
        {/* دیو لوگوعه */}
        <div className=" flex gap-2 items-center mt-2 px-2">
          <img src="/assets\icon\logo.png" alt="" width={40} height={40} />
          <span className="text-[20px] text-white ">Planto</span>
        </div>
        {/* دیو منوعه */}
        <div className="hidden lg:flex">
          <nav className=" flex absolute top-7 left-1/2 transform -translate-x-1/2 gap-10 font-linter text-gray-200 text-[20px] ">
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
        {/* دیو ایکون های سمت راسته */}
        <div className=" absolute flex gap-12 right-0 px-15 top-8 ">
          <img
            className="cursor-pointer hover:opacity-70 transition-opacity"
            src="./assets/icon/search.svg"
            alt="search-icon"
            width={20}
            height={20}
          />
          <img
            className="cursor-pointer hover:opacity-70 transition-opacity"
            src="./assets/icon/bag.svg"
            alt="search-icon"
            width={20}
            height={20}
          />
          <img
            className="cursor-pointer hover:opacity-70 transition-opacity"
            src="./assets/icon/menu.svg"
            alt="search-icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* دیوی که بلر کرده اینه و اینجا {pointer-event} مهمه*/}
      <div
        className="bg-neutral-950/45 absolute inset-0 backdrop-blur-[100px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>
    </div>
  );
}
