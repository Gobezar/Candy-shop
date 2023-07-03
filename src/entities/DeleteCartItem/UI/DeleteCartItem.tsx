"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import cl from "./DeleteCartItem.module.scss";
import Image from "next/image";
import deleteIcon from "../../../../public/images/deleteIcon.png";

const DeleteCartItem = (id: any) => {
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div onClick={() => removeItem(id)}>
      <Image className={cl.deleteCartImg} src={deleteIcon} alt="delete icon" />
    </div>
  );
};
export default DeleteCartItem;
