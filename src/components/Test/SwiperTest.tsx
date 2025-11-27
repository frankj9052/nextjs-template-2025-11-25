"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperTest = () => {
  return (
    <div className="w-lg abg-red-200">
      <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <div className="h-40 bg-blue-400 flex items-center justify-center text-white text-xl">
            Slide 1
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-40 bg-green-400 flex items-center justify-center text-white text-xl">
            Slide 2
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-40 bg-red-400 flex items-center justify-center text-white text-xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
