import { create } from 'zustand';
import type { FinanceItem } from '../types/main.type';
import { persist } from 'zustand/middleware';

type Store = {
  entries: FinanceItem[];
};

type Actions = {
  addEntries: (qty: FinanceItem) => void;
};

export const useEntriesStore = create<Store & Actions>()(
  persist(
    (set) => ({
      entries: [],
      addEntries: (obj: FinanceItem) =>
        set((state) => ({ entries: [obj, ...state.entries] })),
    }),
    {
      name: 'finance-entries',
    }
  )
);
