import type { FinanceItem } from '../types/main.type';

export const saveEntriesToLocalStorage = (
  key: string,
  entries: FinanceItem[]
) => {
  localStorage.setItem(key, JSON.stringify(entries));
};

export const loadEntriesFromLocalStorage = (
  key: string
): FinanceItem[] | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
