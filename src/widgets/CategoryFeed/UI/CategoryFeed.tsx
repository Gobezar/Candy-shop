"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { feedCategories } from "../consts/feedCategories";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./CategoryFeed.scss";

import { Autoplay } from "swiper";

const CategoryFeed = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Autoplay]}
        className="mySwiper my-swiper"
      >
        {feedCategories.map((category) => (
          <SwiperSlide className="swiper-slide-categoryFeed" key={category.id}>
            {category.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default CategoryFeed;
