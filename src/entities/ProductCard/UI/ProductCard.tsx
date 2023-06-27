"use client";
import React from "react";
import Link from "next/link";
import useProductsStore from "@/app/store/useProductsStore";
import SkeletonProductCard from "@/shared/SkeletonProductCard/UI/SkeletonProductCard";
import { useQuery } from "@tanstack/react-query";

import cl from "./ProductCard.module.scss";

interface IproductCard {
  id: number;
  title: string;
  price: number;
  price_second: number;
  weight: number;
  image: string;
  categoryName: string;
}

const ProductCard: React.FC<IproductCard> = ({
  id,
  title,
  price,
  price_second,
  weight,
  image,
  categoryName,
}) => {
  const { products, addToHistoryViewList } = useProductsStore((state) => state);
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
        className={cl.productCard_wrapper}
      >
        <img src={image} alt="изображение продукта" />
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
