import type { FinanceItem } from '../types/main.type';

export const entries: FinanceItem[] = [];

// Масив функцій, які треба викликати при зміні
export const listeners: Array<() => void> = [];

export const subscribe = (listener: () => void) => {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) listeners.splice(index, 1);
  };
};
