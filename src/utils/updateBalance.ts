import type { FinanceItem } from '../types/main.type';
export const updateBalance = (entries: FinanceItem[]) => {
  let balance = 0;
  let income = 0;
  let cost = 0;

  entries.forEach((entry) => {
    if (entry.type === 'income') {
      income += entry.amount;
    } else {
      cost += entry.amount;
    }
  });

  balance = income - cost;
  return { balance, income, cost };
};
