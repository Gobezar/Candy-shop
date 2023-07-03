"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import cl from "./ClearItemsCart.module.scss";

const ClearItemsCart = () => {
  const clearItem = useCartStore((state) => state.clearItem);

  return (
    <div className={cl.clearItemsCart_wrapper}>
      <button className={cl.clearCartButton} onClick={() => clearItem()}>
        Очистить корзину
      </button>
    </div>
  );
};

export default ClearItemsCart;
