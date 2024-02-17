import React from "react";
import HomeSwipers from "./HomeSwipers";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import NewSwipe from "./Newswipe";

const Home = () => {
  return (
    <main>
      <section>
        <div className=" max-w-5xl ms-6 me-6 pt-24 pb-12 grid gap-y-8 relative">
          <div>
            <h2 className="font-bodyFont text-2xl font-extrabold">NIKE</h2>
            <h1 className="font-bodyFont text-5xl font-extrabold mb-4">
              LUNIPEK <br />
              FLYKNIT
              <br />
              ACG
            </h1>
            <p className=" mb-8">
              Designed to withstand the rigors of adverse conditions, the Nike
              ACC Flyknit Lupinek combines Flyknit, Flywire and water resistant
              defender and water repellent system in the upper.
            </p>
            <a
              href="#"
              className="font-bodyFont inline-block bg-white py-4 px-12 drop-shadow-lg rounded-full font-bold hover:drop-shadow-xl transition-all duration-300"
            >
              Buy Now
            </a>
          </div>

          <div className="grid relative">
            {/* circle */}
            <div className="h-64 w-64 bg-gradient-to-r from-slate-50 to-slate-100 rounded-full absolute inset-0 m-auto"></div>

            {/* Swipers */}
            <NewSwipe />
          </div>

          {/* Socials */}
          <div className="absolute top-40 right-0 flex flex-col gap-y-7 text-xl">
            <a href="">
              <RiFacebookCircleLine className="hover:-translate-y-1 transition-all duration-300" />
            </a>
            <a href="">
              <RiTwitterXFill className="hover:-translate-y-1 transition-all duration-300" />
            </a>
            <a href="">
              <FaInstagram className="hover:-translate-y-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
