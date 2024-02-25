import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../index.css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function HomeSwipers() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <article>
                        <img
                            className="w-96 ms-auto me-auto"
                            src="src/assets/nike4.png"
                            alt="Nike Collection"
                        />
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article>
                        <img
                            className="w-96 ms-auto me-auto"
                            src="src/assets/nike2.png"
                            alt="Nike Collection"
                        />
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

// const HomeSwipers = () => {
//   return (
//     <div>
//       <article>
//         <img
//           className="w-96 ms-auto me-auto"
//           src="src/assets/nike1.png"
//           alt="Nike Collection"
//         />
//       </article>

//       <article>
//         <img
//           className="w-96 ms-auto me-auto"
//           src="src/assets/nike2.png"
//           alt="Nike Collection"
//         />
//       </article>
//       <article>
//         <img
//           className="w-96 ms-auto me-auto"
//           src="src/assets/nike3.png"
//           alt="Nike Collection"
//         />
//       </article>
//       <article>
//         <img
//           className="w-96 ms-auto me-auto"
//           src="src/assets/nike4.png"
//           alt="Nike Collection"
//         />
//       </article>
//     </div>
//   );
// };
