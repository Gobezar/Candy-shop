"use client";
import React from "react";
import useCategoriesStore from "../model/useCategoriesStore";
import cn from "classnames";
import Link from "next/link";
import { categories } from "../consts/categories";
import cl from "./CategoriesList.module.scss";

type Props = {
  value?: number;
  onClickCategory?: (i: number) => void;
};

const CategoriesList: React.FC<Props> = () => {
  const { categoryId, setCategoryId } = useCategoriesStore((state) => state);

  return (
    <div className={cl.categories_wrapper}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={categoryName}
            className={cn(
              cl.categories_item,
              categoryId === i ? cl.active : ""
            )}
          >
            <Link href="/catalog">
              <button
                className={cl.categories_button}
                onClick={() => setCategoryId(i)}
              >
                {categoryName}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
