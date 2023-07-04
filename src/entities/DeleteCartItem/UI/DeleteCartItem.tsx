"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import cl from "./DeleteCartItem.module.scss";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteCartItem = (id: any) => {
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div onClick={() => removeItem(id)}>
      <DeleteOutlined className={cl.deleteCartIcon} />
    </div>
  );
};
export default DeleteCartItem;
