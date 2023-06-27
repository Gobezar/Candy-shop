import { create } from "zustand";
import axios from "axios";
import { Iproduct } from "../../types";

type fetchType = {
  category?: string;
  sortType?: string;
};

interface IProductStore {
  products: Iproduct[];
  historyViewList: Iproduct[];
  favoriteList: Iproduct[];
  fetchProducts: ({ category, sortType }: fetchType) => Promise<Iproduct[]>;
  addToHistoryViewList: (obj: Iproduct) => void;
  addToFavoriteList: (obj: Iproduct) => void;
}

const useProductsStore = create<IProductStore>((set) => ({
  products: [],
  historyViewList: [],
  favoriteList: [],
  fetchProducts: async ({ category, sortType }: fetchType) => {
    const order = sortType == "title" ? "order=asc" : "order=desc";
    const response = await axios.get<Iproduct[]>(
      `https://647f3630c246f166da9057f3.mockapi.io/bakeryShop?${category}&sortBy=${sortType}&${order}`
    );
    const result = response.data;
    set({ products: result });
    return result;
  },
  addToHistoryViewList: (obj: Iproduct) => {
    set((state) => {
      const findIndex = state.historyViewList.findIndex(
        (item) => item.id === obj.id
      );
      if (findIndex !== -1) {
        return state;
      } else {
        return {
          ...state,
          historyViewList: [...state.historyViewList, obj],
        };
      }
    });
  },
  addToFavoriteList: (obj: Iproduct) => {
    set((state) => {
      const findIndex = state.favoriteList.findIndex(
        (item) => item.id === obj.id
      );
      if (findIndex !== -1) {
        alert("Вы уже добавили данный товар в избранное.");
        return state;
      } else {
        return {
          favoriteList: [...state.favoriteList, obj],
        };
      }
    });
  },
}));

export default useProductsStore;
