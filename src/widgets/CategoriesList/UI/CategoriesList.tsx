"use client";
import React from "react";
import useCategoriesStore from "../model/useCategoriesStore";
import Button from "@/shared/Button/UI/Button";
import cn from "classnames";
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
            <Button
              theme="categories"
              onClick={() => setCategoryId(i)}
              link={"/catalog"}
            >
              {categoryName}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(CategoriesList);
