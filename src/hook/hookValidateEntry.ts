import { FinanceItemSchema } from '../types/main.type';

export const validateEntry = (entry: unknown) => {
  const result = FinanceItemSchema.safeParse(entry);
  return result;
};
