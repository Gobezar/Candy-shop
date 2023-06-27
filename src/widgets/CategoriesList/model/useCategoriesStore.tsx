import { create } from "zustand";

export interface ICategoriesStore {
  categoryId: number;
  setCategoryId: (id: number) => void;
}

const useCategoriesStore = create<ICategoriesStore>((set) => ({
  categoryId: 0,
  setCategoryId: (id: number) => set({ categoryId: id }),
}));

export default useCategoriesStore;
