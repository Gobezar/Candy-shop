import React from "react";
import RootLayout from "@/app/layout";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import SwiperSlider from "@/widgets/SwiperSlider/UI/SwiperSlider";
import CartItem from "@/widgets/CartItem/UI/CartItem";
import TotalPrice from "../model/TotalPriceCart/TotalPrice";
import ClearItemsCart from "../model/ClearItemsCart/ClearItemsCart";
import CategoryFeed from "@/widgets/CategoryFeed/UI/CategoryFeed";
import cl from "./cart.module.scss";

const Cart = () => {
  return (
    <div>
      <RootLayout>
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
      </RootLayout>
    </div>
  );
};

export default Cart;
