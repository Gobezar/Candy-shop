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
import SkeletonProductCard from "@/shared/SkeletonProductCard/UI/SkeletonProductCard";
import { Iproduct } from "@/types";
import cl from "./ProductList.module.scss";
import Loading from "@/shared/Loading/UI/loading";

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
  const skeleton =
    data && data.map((obj: Iproduct) => <SkeletonProductCard key={obj.id} />);

  if (isLoading) {
    return <Loading className="main" />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={cl.productList_wrapper}>
      <div className={cl.productsBlock}>
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
                    source={"productListPage"}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
