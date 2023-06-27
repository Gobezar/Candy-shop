import { create } from "zustand";

export interface ISearchStore {
  searchText: string;
  setSearchText: (text: string) => void;
}

const useSearchStore = create<ISearchStore>((set) => ({
  searchText: "",
  setSearchText: (text: string) => set({ searchText: text }),
}));

export default useSearchStore;
