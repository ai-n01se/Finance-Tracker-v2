import { create } from 'zustand';
import type { FinanceItem } from '../types/main.type';
import { persist } from 'zustand/middleware';

type Store = {
  entries: FinanceItem[];
};

type FinanceItemId = FinanceItem['id'];

type Actions = {
  addEntry: (qty: FinanceItem) => void;
  deleteEntry: (id: FinanceItemId) => void;
  clearEntries: () => void;
};

export const useEntriesStore = create<Store & Actions>()(
  persist(
    (set) => ({
      entries: [],

      addEntry: (obj: FinanceItem) =>
        set((state) => ({ entries: [obj, ...state.entries] })),

      deleteEntry: (id: FinanceItemId) =>
        set((state) => ({
          entries: state.entries.filter((e) => e.id !== id),
        })),

      clearEntries: () => set(() => ({ entries: [] })),
    }),
    {
      name: 'finance-entries',
    }
  )
);
