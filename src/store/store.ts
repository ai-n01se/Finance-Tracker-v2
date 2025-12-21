import { useState } from 'react';
import type { FinanceItem } from '../types/main.type';

export const useEntries = () => {
  const [entries, setEntries] = useState<FinanceItem[]>([]);

  const addEntry = (newEntry: FinanceItem) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return { entries, addEntry };
};
