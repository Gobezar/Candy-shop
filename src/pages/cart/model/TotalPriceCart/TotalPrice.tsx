"use client";
import React, { useState } from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import cl from "./TotalPrice.module.scss";
import BuyingModalWindow from "@/entities/BuyingModalWindow/UI/BuyingModalWindow";

const TotalPrice = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const buyProducts = useCartStore((state) => state.buyProducts);
  const [visible, setVisible] = useState(false);

  const openBuyingModal = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
    setTimeout(() => {
      buyProducts();
    }, 2000);
  };

  return (
    <div className={cl.TotalPrice_wrapper}>
      <div>Сумма заказа: {totalPrice} ₽</div>
      <div className={cl.buyButton}>
        <button onClick={openBuyingModal} disabled={totalPrice === 0}>
          Купить
        </button>
      </div>
      {visible && <BuyingModalWindow visible={visible} />}
    </div>
  );
};

export default TotalPrice;
