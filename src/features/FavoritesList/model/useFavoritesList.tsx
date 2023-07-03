import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Iproduct } from "../../../types";

interface IFavoritesListStore {
  favoritesList: Iproduct[];
  addToFavoritesList: (obj: Iproduct) => void;
}

const useFavoritesListStore = create<IFavoritesListStore>()(
  persist(
    immer(
      devtools((set) => ({
        favoritesList: [],
        addToFavoritesList: (obj: Iproduct) => {
          set((state) => {
            const findIndex = state.favoritesList.findIndex(
              (item) => item.id === obj.id
            );
            if (findIndex !== -1) {
              alert("Вы уже добавили данный товар в избранное.");
              return state;
            } else {
              alert(" Товар добавлен в избранное.");
              return {
                favoritesList: [...state.favoritesList, obj],
              };
            }
          });
        },
      }))
    ),
    { name: "favoritesList", version: 1 }
  )
);

export default useFavoritesListStore;
