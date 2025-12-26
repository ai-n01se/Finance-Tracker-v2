export type FinanceItem = {
  id: string;
  description: string;
  type: FinanceType;
  amount: number;
};

export type FinanceType = 'income' | 'expense';
