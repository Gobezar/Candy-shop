"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";

import useProductsStore from "@/app/store/useProductsStore";
import useHistoryViewStore from "@/features/HistoryViewList/model/useHistoryViewList";
import SkeletonProductCard from "@/shared/SkeletonProductCard/UI/SkeletonProductCard";
import cn from "classnames";

import cl from "./ProductCard.module.scss";

interface IproductCard {
  id: number;
  title: string;
  price: number;
  price_second: number;
  weight: number;
  image: string;
  categoryName: string;
  source?: string;
}

const ProductCard: React.FC<IproductCard> = ({
  id,
  title,
  price,
  price_second,
  weight,
  image,
  categoryName,
  source,
}) => {
  const { products } = useProductsStore((state) => state);
  const { addToHistoryViewList } = useHistoryViewStore((state) => state);
  const selectedProduct = products.filter((prod) => prod.id === id);
  const { isLoading, isError } = useQuery(["products"]);

  if (isLoading) {
    return (
      <div className={cl.SkeletonProductCard}>
        <SkeletonProductCard />
      </div>
    );
  }

  return (
    <Link href={`/product/${id}`}>
      <div
        onClick={() => addToHistoryViewList(selectedProduct[0])}
        className={cn(
          cl.productCard_wrapper,
          source === "productListPage" ? cl.productListPage : ""
        )}
      >
        <Image
          src={image}
          className={cl.image}
          alt="изображение продукта"
          width={100}
          height={100}
        />
        <div className={cl.naming}>
          <p>{categoryName}</p>
          <p>
            <span>{title}</span>
          </p>
        </div>
        <div className={cl.properties}>
          <p>
            <span>{price} ₽</span> {price_second} ₽
          </p>
          <p>{weight} гр.</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
