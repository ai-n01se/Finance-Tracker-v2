import type { FinanceItem } from '../types/main.type';
import { entries, listeners } from '../store/store';

export const addNewEntries = (newEntry: FinanceItem) => {
  if (!newEntry) return;
  if (
    !newEntry.id ||
    !newEntry.description ||
    !newEntry.type ||
    !newEntry.amount ||
    newEntry.amount <= 0
  )
    return;
  entries.push(newEntry);
  listeners.forEach((l) => l());
};
