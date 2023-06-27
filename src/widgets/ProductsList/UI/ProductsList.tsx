"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useSearchedElements } from "@/features/Search/lib/useSearchedElements";
import useCategoriesStore from "@/widgets/CategoriesList/model/useCategoriesStore";
import useSortStore from "@/features/Sort/model/useSortStore";
import useSearchStore from "@/features/Search/model/useSearchStore";
import useProductsStore from "@/app/store/useProductsStore";

import ProductCard from "@/entities/ProductCard/UI/ProductCard";
import Error from "@/shared/Error/UI/error";
import Loading from "@/shared/Loading/UI/loading";
import SkeletonProductCard from "@/shared/SkeletonProductCard/UI/SkeletonProductCard";
import { Iproduct } from "@/types";
import cl from "./ProductList.module.scss";

const ProductsList = () => {
  const { categoryId } = useCategoriesStore((state) => state);
  const sort = useSortStore((state) => state.sort);
  const sortType = sort.sortProperty;
  const { searchText } = useSearchStore((state) => state);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const { isLoading, isError, data } = useQuery(
    ["products", { categoryId, sortType }],
    () =>
      fetchProducts({
        category: categoryId > 0 ? `category=${categoryId}` : "",
        sortType,
      })
  );
  const searchedElements = useSearchedElements(data, searchText);
  const skeleton = [...new Array(31)].map((_, index) => (
    <SkeletonProductCard key={index} />
  ));

  // console.log(categoryId);
  //  Есть ошибка , нужно исправить

  if (isError) {
    return <Error />;
  }

  return (
    <div className={cl.productList_wrapper}>
      <div className={cl.productList_filtersBlock}>
        <p>Фильтры</p>
      </div>
      <div>
        <ul>
          {isLoading
            ? skeleton
            : searchedElements &&
              searchedElements.map((obj: Iproduct) => (
                <li key={obj.id}>
                  <ProductCard
                    id={obj.id}
                    title={obj.title}
                    price={obj.price}
                    price_second={obj.price_second}
                    weight={obj.weight}
                    image={obj.image}
                    categoryName={obj.categoryName}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
