import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Iproduct } from "../../../types";

interface IHistoryViewListStore {
  historyViewList: Iproduct[];
  addToHistoryViewList: (obj: Iproduct) => void;
}

const useHistoryViewStore = create<IHistoryViewListStore>()(
  persist(
    immer(
      devtools((set) => ({
        historyViewList: [],
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
      }))
    ),
    { name: "historyViewList", version: 1 }
  )
);

export default useHistoryViewStore;
