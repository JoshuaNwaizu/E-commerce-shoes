import React from "react";
//import "./Navbar.css";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="container nav" id="nav">
        <a href="" className="nav-logo">
          <img
            src="src/assets/nike-logo-removebg-preview.png"
            alt="Nav logo nike"
          />
        </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="flex flex-col">
            <Navlinks text="Man" />
            <Navlinks text="Woman" />
            <Navlinks text="Popular" />
            <Navlinks text="Trend" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
