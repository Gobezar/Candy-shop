// import Cart from "@/pages/cart/UI/cart";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Корзина | Candy Shop",
// };
// export default Cart;

import React from "react";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import SwiperSlider from "@/widgets/SwiperSlider/UI/SwiperSlider";
import CartItem from "@/widgets/CartItem/UI/CartItem";
import TotalPrice from "./model/TotalPriceCart/TotalPrice";
import ClearItemsCart from "./model/ClearItemsCart/ClearItemsCart";
import CategoryFeed from "@/widgets/CategoryFeed/UI/CategoryFeed";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина | Candy Shop",
};

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CategoriesList />
      <CartItem />
      <div className={cl.buyingBlock_wrapper}>
        <ClearItemsCart />
        <TotalPrice />
      </div>
      <SwiperSlider favorites={true}>Избранное</SwiperSlider>

      <CategoryFeed />
      <SwiperSlider historyView={true}>Вы смотрели</SwiperSlider>
    </div>
  );
};

export default Cart;
