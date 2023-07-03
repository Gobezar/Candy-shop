"use client";
import React from "react";
import useCartStore from "@/features/Cart/model/useCartStore";
import QuantityCartItems from "@/entities/QuantityCartItems/UI/QuantityCartItems";
import { Iproduct } from "@/types";
import Image from "next/image";
import DeleteCartItem from "@/entities/DeleteCartItem/UI/DeleteCartItem";
import cl from "./CartItem.module.scss";

const CartItem: React.FC = ({}) => {
  const items: Iproduct[] = useCartStore((state) => state.items);
  const cartEmptyImg = "https://i.ibb.co/xzv10Qd/empty-Cart.png";

  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item: Iproduct) => (
            <li key={item.id}>
              <div className={cl.cartItem_wrapper}>
                <div className={cl.deleteBlock}>
                  <DeleteCartItem id={item.id} />
                </div>
                <div className={cl.imgBlock}>
                  <Image
                    src={item.image}
                    alt="product image"
                    className={cl.image}
                    width={100}
                    height={100}
                  />
                </div>
                <div className={cl.titleBlock}>{item.title}</div>
                <div className={cl.priceBlock}>
                  <QuantityCartItems item={item} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={cl.cartEmpty}>
          <h3>В корзине нет товаров..</h3>

          <Image
            src={cartEmptyImg}
            alt="cart empty image"
            className={cl.cartEmptyImage}
            width={100}
            height={100}
          />
        </div>
      )}
    </>
  );
};

export default CartItem;
