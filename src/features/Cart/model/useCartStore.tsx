import { create } from "zustand";
import { Iproduct } from "@/types";

interface ICartStore {
  totalPrice: number;
  items: Iproduct[];
  addItem: (obj: Iproduct) => void;
  minusItem: (obj: Iproduct) => void;
  removeItem: (obj: Iproduct) => void;
  clearItem: () => void;
}

const useCartStore = create<ICartStore>((set) => ({
  totalPrice: 0,
  items: [],
  addItem: (obj: Iproduct) => {
    set((state) => {
      const findItem = state.items.find((item) => item.id === obj.id);
      if (findItem) {
        console.log("добавили");
        findItem.count++;
      } else {
        console.log("новая");
        const newItem: Iproduct = { ...obj, count: 1 };
        state.items.push(newItem);
      }
      const totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
      return { ...state, totalPrice };
    });
  },
  minusItem: (obj: Iproduct) => {
    set((state) => {
      const findItem = state.items.find((item) => item.id === obj.id);
      if (findItem) {
        console.log("уменьшили");
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter((item) => item.id !== obj.id);
        }
      }
      const totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
      return { ...state, totalPrice };
    });
  },
  removeItem: (obj: Iproduct) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== obj.id);
      const totalPrice = updatedItems.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
      return { ...state, items: updatedItems, totalPrice };
    });
  },
  clearItem: () => {
    set((state) => {
      console.log("очистили");
      return { totalPrice: 0, items: [] };
    });
  },
}));

export default useCartStore;
