"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import { Iproduct } from "@/types";

interface QuantityCartItemsProps {
  item: Iproduct;
}
const QuantityCartItems: React.FC<QuantityCartItemsProps> = ({ item }) => {
  const { addItem, minusItem } = useCartStore((state) => state);

  return (
    <div>
      {item.price_second}
      <button onClick={() => addItem(item)}>+</button>
      {item.count}
      <button onClick={() => minusItem(item)}>-</button>
      {item.price_second * item.count}
    </div>
  );
};

export default QuantityCartItems;
