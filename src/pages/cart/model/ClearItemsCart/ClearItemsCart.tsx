"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";

const ClearItemsCart = () => {
  const clearItem = useCartStore((state) => state.clearItem);

  return (
    <div>
      <button onClick={() => clearItem()}>Очистить корзину</button>
    </div>
  );
};

export default ClearItemsCart;
