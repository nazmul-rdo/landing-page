import React from "react";
import coffee from "../assets/coffee-one.png";
import RatingDisplay from "./RatingDisplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Hero = ({ rating }) => {
  return (
    <section id="hero" className="bg-light">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>

      </Swiper>
      <div className="flex flex-col items-center p-4 gap-4 w-full justify-center py-18">
        <div className="flex flex-col text-5xl p-4 bg-white rounded-xl">
          <RatingDisplay rating={rating} />
        </div>
      </div>
    </section>
  );
};


const Slider = () => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-around h-[80vh] px-8">
      <div className="animate-rotate-y animate-infinite hidden md:block py-4 drop-shadow-2xl">
        <img src={coffee} alt="A coffee" />
      </div>
      <div className="flex items-center flex-col px-4">
        <h1 className="font-bold text-3xl text-center text-dark-grey sm:text-5xl md:text-6xl lg:text-7xl pb-8">
          Good Coffee Will Always find the Audience
        </h1>
        <p className="text-light-grey text-center py-4 text-2xl pb-8">
          To give you all the aroma of the Neapolitan blend, enveloping,
          intense and cooked to right point
        </p>

        <div className="flex items-center my-4 gap-4">
          <button className="animate-flip-down animate-once transition duration-800 text-2xl text-orange border-2 border-orange rounded-xl px-16 py-5 hover:bg-orange hover:text-white">
            Our Story
          </button>
        </div>
      </div>

      <div className="animate-wiggle animate-infinite hidden md:block py-4 drop-shadow-2xl">
        <img src={coffee} alt="A coffee" />
      </div>
    </div>
  )
}