import { create } from 'zustand';
import type { FinanceItem, UserItem } from '../types/main.type';
import { persist } from 'zustand/middleware';

type StoreFinance = {
  entries: FinanceItem[];
};

type StoreUser = {
  user: true | null;
  id: UserItem['id'] | null;
  name: UserItem['name'] | null;
  email: UserItem['email'] | null;
};

type StoreUsersData = {
  users: UserItem[];
};

type FinanceItemId = FinanceItem['id'];

type ActionsFinance = {
  addEntry: (qty: FinanceItem) => void;
  deleteEntry: (id: FinanceItemId) => void;
  clearEntries: () => void;
};

type ActionsUser = {
  setUser: (user: {
    id: UserItem['id'];
    name: UserItem['name'];
    email: UserItem['email'];
  }) => void;
  clearUser: () => void;
};

type ActionsUsersData = {
  addUser: (user: UserItem) => void;
  deleteUser: (id: UserItem['id']) => void;
  clearUsers: () => void;
};

export const useEntriesStore = create<StoreFinance & ActionsFinance>()(
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
    },
  ),
);

export const useUserStore = create<StoreUser & ActionsUser>()(
  persist(
    (set) => ({
      user: null,
      id: null,
      name: null,
      email: null,
      setUser: (user: {
        id: UserItem['id'];
        name: UserItem['name'];
        email: UserItem['email'];
      }) =>
        set(() => ({
          user: true,
          id: user.id,
          name: user.name,
          email: user.email,
        })),
      clearUser: () =>
        set(() => ({
          user: null,
          id: null,
          name: null,
          email: null,
        })),
    }),
    {
      name: 'user-data',
    },
  ),
);

export const useUsersDataStore = create<StoreUsersData & ActionsUsersData>()(
  persist(
    (set) => ({
      users: [],

      addUser: (user: UserItem) =>
        set((state) => ({ users: [user, ...state.users] })),

      deleteUser: (id: UserItem['id']) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),

      clearUsers: () => set(() => ({ users: [] })),
    }),
    {
      name: 'users-data',
    },
  ),
);
