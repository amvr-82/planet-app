export default function Header() {
  return (
    <header className="bg-red-800 fixed top-0 w-full h-20 z-5000 flex items-center px-6">
      <div className=" flex flex-row items-center gap-1 ml-0">
        <img src="/assets/icon/logo.png" alt="" width={40} height={40} />
        <span className="text-[28px]">Planto.</span>
      </div>
    </header>
  );
}
