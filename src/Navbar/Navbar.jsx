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
        className="flex justify-between items-center max-w-5xl h-14 ms-6 me-6 bg-slate-100"
        id="nav"
      >
        <a href="" className="">
          <img
            src="src/assets/nike-logo-removebg-preview.png"
            alt="Nav logo nike"
            className="block h-16"
          />
        </a>
        <div
          className={twMerge(
            "fixed top-0 -right-full flex flex-row bg-slate-100 shadow-3xl h-full w-10/12 py-24 px-12 transition-all duration-300",
            isOpen && "right-0 transition-all duration-500",
          )}
          id="nav-menu"
        >
          <ul className="flex flex-col gap-y-10">
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
            className="flex text-3xl cursor-pointer absolute top-5 right-6"
            onClick={() => handleNewToggle()}
          />
        </div>
        {/* TOGGLE BUTTON */}
        <HiOutlineSquares2X2
          className="flex text-3xl cursor-pointer"
          onClick={() => handleNewToggle()}
        />
      </nav>
    </header>
  );
};

export default Navbar;
