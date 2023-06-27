"use client";
import React, { useMemo, useEffect } from "react";
import useProductsStore from "@/app/store/useProductsStore";
import ProductCard from "../../../entities/ProductCard/UI/ProductCard";
import SkeletonProductCard from "@/shared/SkeletonProductCard/UI/SkeletonProductCard";
import "./SwiperSlide.scss";
import classNames from "classnames";

import cl from "./SwiperSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import "../../../app/styles/globals.scss";

interface SwiperSliderProps {
  novelties?: boolean;
  catalog?: boolean;
  historyView?: boolean;
  similar?: boolean;
  couples?: boolean;
  children?: React.ReactNode;
  id?: string;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({
  novelties,
  catalog,
  historyView,
  similar,
  couples,
  children,
  id,
}) => {
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const { products, historyViewList } = useProductsStore((state) => state);
  const randomProducts = useMemo(() => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }, [products]);
  const selectedProduct = products.find((product) => product.id == Number(id));

  // useEffect(() => {
  //   fetchProducts({});
  // }, []);

  return (
    <div className={cl.swiperSlider_wrapper}>
      <div className={cl.sliderTitleBlock}>
        <h2>{children}</h2>
      </div>

      <div className="slider">
        <Swiper
          mousewheel={true}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          {products && catalog && (
            <Swiper>
              {products.map((card, index) => (
                <SwiperSlide
                  className={classNames("swiper-slide-cards", {
                    "last-slide": index === products.length - 1,
                  })}
                  key={card.id}
                >
                  <ProductCard
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    price_second={card.price_second}
                    weight={card.weight}
                    image={card.image}
                    categoryName={card.categoryName}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {products && novelties && (
            <ul>
              {products
                .filter((card) => card.isNew)
                .map((card) => (
                  <SwiperSlide key={card.id}>
                    <ProductCard
                      id={card.id}
                      title={card.title}
                      price={card.price}
                      price_second={card.price_second}
                      weight={card.weight}
                      image={card.image}
                      categoryName={card.categoryName}
                    />
                  </SwiperSlide>
                ))}
            </ul>
          )}

          {products && historyView && historyViewList.length > 0 && (
            <ul>
              {historyViewList.map((card) => (
                <SwiperSlide key={card.id}>
                  <ProductCard
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    price_second={card.price_second}
                    weight={card.weight}
                    image={card.image}
                    categoryName={card.categoryName}
                  />
                </SwiperSlide>
              ))}
            </ul>
          )}

          {products && similar && (
            <ul>
              {products
                .filter((prod) => prod.category == selectedProduct?.category)
                .map((card) => (
                  <SwiperSlide key={card.id}>
                    <ProductCard
                      id={card.id}
                      title={card.title}
                      price={card.price}
                      price_second={card.price_second}
                      weight={card.weight}
                      image={card.image}
                      categoryName={card.categoryName}
                    />
                  </SwiperSlide>
                ))}
            </ul>
          )}

          {products && couples && (
            <ul>
              {randomProducts.map((card) => (
                <SwiperSlide key={card.id}>
                  <ProductCard
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    price_second={card.price_second}
                    weight={card.weight}
                    image={card.image}
                    categoryName={card.categoryName}
                  />
                </SwiperSlide>
              ))}
            </ul>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;