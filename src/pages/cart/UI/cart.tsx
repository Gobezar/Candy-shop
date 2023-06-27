import React from "react";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import SwiperSlider from "@/widgets/SwiperSlider/UI/SwiperSlider";
import CartItem from "@/widgets/CartItemsList/UI/CartItem";
import TotalPrice from "../model/TotalPriceCart/TotalPrice";
import ClearItemsCart from "../model/ClearItemsCart/ClearItemsCart";
import CategoryFeed from "@/widgets/CategoryFeed/UI/CategoryFeed";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CategoriesList />
      <CartItem />
      <TotalPrice />
      <ClearItemsCart />
      <CategoryFeed />
      <SwiperSlider historyView={true}>Вы смотрели</SwiperSlider>
    </div>
  );
};

export default Cart;
