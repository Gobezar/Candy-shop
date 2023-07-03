import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Iproduct } from "../../../types";

interface ICartStore {
  totalPrice: number;
  items: Iproduct[];
  addItem: (obj: Iproduct) => void;
  minusItem: (obj: Iproduct) => void;
  removeItem: (obj: Iproduct) => void;
  clearItem: () => void;
}

const useCartStore = create<ICartStore>()(
  persist(
    immer(
      devtools((set) => ({
        totalPrice: 0,
        items: [],
        addItem: (obj: Iproduct) => {
          set((state) => {
            const findItem = state.items.find((item) => item.id === obj.id);
            if (findItem) {
              // alert("Товар добавлен к существующей позиции в корзине.");
              findItem.count++;
            } else {
              alert("Товар добавлен в корзину.");
              const newItem: Iproduct = { ...obj, count: 1 };
              state.items.push(newItem);
            }
            const totalPrice = state.items.reduce((sum, item) => {
              return item.price_second * item.count + sum;
            }, 0);
            void (state.totalPrice = totalPrice);
            return state;
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
            void (state.totalPrice = totalPrice);
            return state;
          });
        },
        removeItem: (obj: Iproduct) => {
          set((state) => {
            const updatedItems = state.items.filter(
              (item) => item.id !== obj.id
            );
            const totalPrice = updatedItems.reduce((sum, item) => {
              return item.price * item.count + sum;
            }, 0);
            return { ...state, items: updatedItems, totalPrice };
          });
        },
        clearItem: () => {
          if (window.confirm("Ты действительно хочешь очистить корзину?")) {
            set(() => ({ totalPrice: 0, items: [] }));
          }
        },
      }))
    ),
    { name: "сartItems", version: 1 }
  )
);

export default useCartStore;
