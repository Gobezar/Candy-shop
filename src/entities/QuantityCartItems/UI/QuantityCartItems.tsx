"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import cl from "./QuantityCartItems.module.scss";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Iproduct } from "@/types";

interface QuantityCartItemsProps {
  item: Iproduct;
}
const QuantityCartItems: React.FC<QuantityCartItemsProps> = ({ item }) => {
  const { addItem, minusItem } = useCartStore((state) => state);

  return (
    <div className={cl.QuantityCartItems_wrapper}>
      {item.price_second} ₽
      <button onClick={() => minusItem(item)}>
        <MinusCircleOutlined />
      </button>
      {item.count}
      <button onClick={() => addItem(item)}>
        <PlusCircleOutlined />
      </button>
      Итого: {item.price_second * item.count} ₽
    </div>
  );
};

export default QuantityCartItems;
