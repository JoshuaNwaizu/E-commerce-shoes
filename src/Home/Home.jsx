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
        <div className=" max-[320px]:ms-4 max-[320px]:me-4 max-w-5xl ms-6 me-6 pt-24 pb-20 grid gap-y-8 relative min-[576px]:grid-cols-[350px] min-[576px]:justify-center min-[1023px]:grid-cols-2 min-[1023px]:h-screen place-items-center min-[1023px]:gap-x-8">
          <div className="min-[576px]:text-center">
            <h2 className="max-[320px]:text-xl font-bodyFont text-2xl font-extrabold">
              NIKE
            </h2>
            <h1 className=" max-[320px]:text-4xl font-bodyFont text-5xl font-extrabold mb-4">
              LUNIPEK <br />
              FLYKNIT
              <br />
              ACG
            </h1>
            <p className=" mb-8 ">
              Designed to withstand the rigors of adverse conditions, the Nike
              ACC Flyknit Lupinek combines Flyknit, Flywire and water resistant
              defender and water repellent system in the upper.
            </p>
            <a
              href="#"
              className="max-[320px]:py-4 max-[320px]:px-4 max-[320px]:text-xs font-bodyFont inline-block bg-white py-4 px-12 drop-shadow-lg rounded-full font-bold hover:drop-shadow-xl transition-all duration-300"
            >
              Buy Now
            </a>
          </div>

          <div className="grid relative h-full mb-8">
            {/* circle */}
            <div className=" max-[320px]:h-48 max-[320px]:w-48 h-60 w-60 bg-gradient-to-r from-slate-50 to-slate-100 rounded-full absolute inset-0 m-auto"></div>

            {/* Swipers */}
            <NewSwipe />
          </div>

          {/* Socials */}
          <div className=" max-[320px]:top-28 absolute top-32 right-0 flex flex-col gap-y-7 text-xl min-[576px]:text-3xl min-[321px]:text-2xl">
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
