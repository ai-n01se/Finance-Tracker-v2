import { useState } from 'react';
import type { FinanceItem } from '../types/main.type';
import { saveEntriesToLocalStorage } from '../utils/localStorage';

export const useEntries = () => {
  const [entries, setEntries] = useState<FinanceItem[]>([]);

  const addEntry = (newEntry: FinanceItem) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    saveEntriesToLocalStorage('financeEntries', updatedEntries);
  };

  const addEntryWithLocalStorage = (newEntry: FinanceItem[]) => {
    setEntries(newEntry);
  };

  return { entries, addEntry, addEntryWithLocalStorage };
};
