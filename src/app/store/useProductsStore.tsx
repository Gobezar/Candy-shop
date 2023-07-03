import { create } from "zustand";
import axios from "axios";
import { Iproduct } from "../../types";

type fetchType = {
  category?: string;
  sortType?: string;
};

interface IProductStore {
  products: Iproduct[];
  fetchProducts: ({ category, sortType }: fetchType) => Promise<Iproduct[]>;
}

const useProductsStore = create<IProductStore>((set) => ({
  products: [],

  fetchProducts: async ({ category, sortType }: fetchType) => {
    const order = sortType == "title" ? "order=asc" : "order=desc";
    const response = await axios.get<Iproduct[]>(
      `https://647f3630c246f166da9057f3.mockapi.io/bakeryShop?${category}&sortBy=${sortType}&${order}`
    );
    const result = response.data;
    set({ products: result });
    return result;
  },
}));

export default useProductsStore;
