"use client";
import React, { useEffect } from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import QuantityCartItems from "@/entities/QuantityCartItems/UI/QuantityCartItems";
import { Iproduct } from "@/types";

import DeleteCartItem from "@/entities/DeleteCartItem/UI/DeleteCartItem";
import cl from "./CartItem.module.scss";

const CartItem: React.FC = ({}) => {
  const items: Iproduct[] = useCartStore((state) => state.items);
  return (
    <>
      {items && (
        <ul>
          {items.map((item: Iproduct) => (
            <li key={item.id}>
              <div className={cl.cartItem_wrapper}>
                <div className={cl.deleteBlock}>
                  <DeleteCartItem id={item.id} />
                </div>
                <div className={cl.imgBlock}>
                  <img src={item.image} alt="product image" />
                </div>
                <div className={cl.titleBlock}>{item.title}</div>
                <div className={cl.priceBlock}>
                  <QuantityCartItems item={item} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CartItem;
