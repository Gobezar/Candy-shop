import { create } from "zustand";

export type sortObject = {
  name: string;
  sortProperty: string;
};

export interface ISortStore {
  sort: sortObject;
  open: boolean;
  setSort: (obj: sortObject) => void;
  setOpen: (arg: boolean) => void;
}

const useSortStore = create<ISortStore>((set) => ({
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  setSort: (obj: sortObject) => set({ sort: obj }),
  open: false,
  setOpen: (arg: boolean) => set({ open: arg }),
}));

export default useSortStore;
