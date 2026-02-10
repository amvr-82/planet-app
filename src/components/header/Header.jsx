export default function Header() {
  return (
    <div className="fixed top-0 w-full h-20 z-50">
      {/* خود هدر*/}
      <div className="absolute inset-0 flex items-center px-6 z-10">
        <img src="/assets\icon\logo.png" alt="" width={40} height={40} />
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
