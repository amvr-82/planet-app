export default function Header() {
  return (
    <div className="fixed top-0 w-full h-20 z-50">
      {/* خود هدر*/}
      <div className="absolute inset-0 flex items-center  align-middle  px-6 z-10">
        <div className="flex gap-2 items-center p-2">
          <img src="/assets\icon\logo.png" alt="" width={40} height={40} />
          <span className="text-[28px] text-white ">Planto</span>
        </div>
        <div className="">
          <nav className="flex gap-6 font-linter text-white text-[24px] left-1/2 translate-x-1/2 font-extralight">
            <a href="home">Home</a>
            <a href="type">Plants Type</a>
            <a href="more">More</a>
            <a href="contact">Contact</a>
          </nav>
        </div>
        <div className=" absolute right-0 flex">
          <img
            src="./assets/icon/search.svg"
            alt="search-icon"
            width={26}
            height={26}
          />
          <img
            src="./assets/icon/search.svg"
            alt="search-icon"
            width={26}
            height={26}
          />
          <img
            src="./assets/icon/search.svg"
            alt="search-icon"
            width={26}
            height={26}
          />
        </div>
      </div>

      {/* اینجا pointer-event  مهمههههه*/}
      <div
        className="bg-neutral-950/45 absolute inset-0 backdrop-blur-[10px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>
    </div>
  );
}
