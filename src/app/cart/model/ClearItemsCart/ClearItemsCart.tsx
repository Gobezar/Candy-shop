"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import cl from "./ClearItemsCart.module.scss";

const ClearItemsCart = () => {
  const clearItem = useCartStore((state) => state.clearItem);
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <div className={cl.clearItemsCart_wrapper}>
      <button
        className={cl.clearCartButton}
        onClick={() => clearItem()}
        disabled={totalPrice === 0}
      >
        Очистить корзину
      </button>
    </div>
  );
};

export default ClearItemsCart;
