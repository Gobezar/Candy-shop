"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";

const DeleteCartItem = (id: any) => {
  const icon = "https://i.ibb.co/8g48QX5/icons8-delete-100-2.png";

  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div onClick={() => removeItem(id)}>
      <img src={icon} alt="delete icon" />
    </div>
  );
};
export default DeleteCartItem;
