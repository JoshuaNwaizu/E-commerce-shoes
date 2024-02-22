import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Pagination, EffectCreative } from "swiper/modules";

import "../index.css";
const NewSwipe = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [-100, 0, -500],
            opacity: 0,
          },
          next: {
            translate: [100, 0, -500],
            opacity: 0,
          },
        }}
        modules={[EffectCreative, Pagination]}
        className="mySwiper "
        spaceBetween="32"
      >
        <SwiperSlide className="">
          {" "}
          <article>
            <img
              className="h-full ms-auto me-auto"
              src="/nike3.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <article>
            <img
              className="h-full ms-auto me-auto"
              src="/double_nike-removebg-preview.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        <SwiperSlide className="">
          {" "}
          <article>
            <img
              className="w-full ms-auto me-auto"
              src="/nike7-removebg-preview.png"
              alt="Nike Collection"
            />
          </article>
        </SwiperSlide>

        <SwiperSlide className="">
          <article>
            <img
              className="w-full ms-auto me-auto"
              src="/nike4.png"
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
