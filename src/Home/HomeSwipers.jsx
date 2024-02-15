import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeSwipers = () => {
  return (
    <div>
      <article>
        <img
          className="w-96 ms-auto me-auto"
          src="src/assets/nike1.png"
          alt="Nike Collection"
        />
      </article>

      <article>
        <img
          className="w-96 ms-auto me-auto"
          src="src/assets/nike2.png"
          alt="Nike Collection"
        />
      </article>
      <article>
        <img
          className="w-96 ms-auto me-auto"
          src="src/assets/nike3.png"
          alt="Nike Collection"
        />
      </article>
      <article>
        <img
          className="w-96 ms-auto me-auto"
          src="src/assets/nike4.png"
          alt="Nike Collection"
        />
      </article>
    </div>
  );
};

export default HomeSwipers;
