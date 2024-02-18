import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const NewSwipe = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="ms-1 me-1"
      >
        <SwiperSlide>
          {" "}
          <article>
            <img
              className="w-full ms-auto me-auto"
              src="src/assets/nike3.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <article>
            <img
              className="w-full ms-auto me-auto"
              src="src/assets/nike1.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        <SwiperSlide className="">
          {" "}
          <article>
            <img
              className="w-full ms-auto me-auto"
              src="src/assets/nike2.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        <SwiperSlide className="">
          <article>
            <img
              className="w-full ms-auto me-auto"
              src="src/assets/nike4.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default NewSwipe;
