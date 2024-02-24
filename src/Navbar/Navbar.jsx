import React, { useState } from "react";
import Navlinks from "./Navlinks";
import { IoClose } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNewToggle = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header
      id="header"
      className="fixed w-full top-0 left-0 z-100 bg-slate-100"
    >
      <nav
        className=" flex justify-between items-center max-w-5xl h-14 ms-6 me-6 bg-slate-100 min-[1024px]:h-20 "
        id="nav"
      >
        <a href="" className="">
          <img
            src="/nike-logo-removebg-preview.png"
            alt="Nav logo nike"
            className="block h-16"
          />
        </a>
        <div
          className={twMerge(
            "max-[1023px]:fixed max-[1023px]:top-0 max-[1023px]:-right-full max-[1023px]:flex max-[1023px]:flex-row max-[1023px]:bg-slate-100 max-[1023px]:shadow-3xl max-[1023px]:h-full max-[1023px]:w-10/12 max-[1023px]:py-24 max-[1023px]:px-12 max-[1023px]:transition-all max-[1023px]:duration-300 min-[576px]:w-3/5 min-[1024px]:w-auto",
            isOpen &&
              "max-[1023px]:right-0 max-[1023px]:transition-all max-[1023px]:duration-500",
          )}
          id="nav-menu"
        >
          <ul className="flex max-[1023px]:flex-col max-[1023px]:gap-y-10 min-[1024px]:flex-row min-[1024px]:gap-x-16">
            <Navlinks text="Man" handleClickNav={handleNewToggle} target="#" />
            <Navlinks
              text="Woman"
              handleClickNav={handleNewToggle}
              target="#"
            />
            <Navlinks
              text="Popular"
              handleClickNav={handleNewToggle}
              target="#"
            />
            <Navlinks
              text="Trend"
              handleClickNav={handleNewToggle}
              target="#"
            />
          </ul>
          {/* CLOSE BUTTON */}
          <IoClose
            className="max-[1023px]:flex max-[1023px]:text-3xl max-[1023px]:cursor-pointer max-[1023px]:absolute max-[1023px]:top-5 max-[1023px]:right-6 min-[1023px]:hidden"
            onClick={() => handleNewToggle()}
          />
        </div>
        {/* TOGGLE BUTTON */}
        <HiOutlineSquares2X2
          className="max-[1023px]:flex max-[1023px]:text-3xl max-[1023px]:cursor-pointer min-[1023px]:hidden"
          onClick={() => handleNewToggle()}
        />
      </nav>
    </header>
  );
};

export default Navbar;
