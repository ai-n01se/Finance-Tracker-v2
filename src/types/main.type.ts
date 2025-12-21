export type FinanceItem = {
  id: string;
  description: string;
  type: 'income' | 'expense';
  amount: number;
};
