import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMobileMenu = () => setMobileOpen(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 h-20 z-[999]">
      <div
        className="bg-gray-950/30 absolute inset-0 backdrop-blur-[5px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* محتوای هدر */}
      <div className="relative z-10 flex h-full items-center justify-between px-4 sm:px-6">
        {/* لوگو */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/icon/logo.png"
            alt="Planto logo"
            width={40}
            height={40}
          />
          <span className="text-[20px] text-white">Planto</span>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex gap-10 text-gray-200 text-[20px]">
          <a className="hover:opacity-70 transition-opacity" href="/">
            Home
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#type">
            Plants Type
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#more">
            More
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#contact">
            Contact
          </a>
        </nav>

        {/* آیکن‌های سمت راست */}
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            type="button"
            className="cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Search"
          >
            <img src="/assets/icon/search.svg" alt="" width={20} height={20} />
          </button>

          <button
            type="button"
            className="cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Bag"
          >
            <img src="/assets/icon/bag.svg" alt="" width={20} height={20} />
          </button>

          {/* منوی موبایل */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((v) => !v);
            }}
            className="cursor-pointer hover:opacity-70 transition-opacity lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <img src="/assets/icon/menu.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-20 inset-x-0 z-20 px-4 sm:px-6 pb-4"
        >
          <div className="card1 rounded-[24px] p-4">
            <nav className="flex flex-col gap-4 text-gray-200 text-[18px] p-5">
              <Link
                className="hover:opacity-70 transition-opacity"
                href="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                className="hover:opacity-70 transition-opacity"
                href="#type"
                onClick={closeMobileMenu}
              >
                Plants Type
              </Link>
              <Link
                className="hover:opacity-70 transition-opacity"
                href="#more"
                onClick={closeMobileMenu}
              >
                More
              </Link>
              <Link
                className="hover:opacity-70 transition-opacity"
                href="#contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
