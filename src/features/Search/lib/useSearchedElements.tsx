import { useMemo } from "react";
import { Iproduct } from "@/types";

export const useSearchedElements = (
  products: Iproduct[] | undefined,
  searchText: string
) => {
  const searchedElements = useMemo(() => {
    if (products)
      return products.filter((elem) =>
        elem.title.toLowerCase().includes(searchText.toLowerCase())
      );
  }, [searchText, products]);
  return searchedElements;
};
