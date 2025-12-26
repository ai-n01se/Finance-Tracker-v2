import z from 'zod';

export const FinanceItemSchema = z.object({
  id: z.uuid(),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters long')
    .max(100, 'Description must be less than 100 characters long'),
  type: z.enum(['income', 'expense']),
  amount: z
    .number()
    .positive('Amount must be a positive number')
    .min(0.01, 'Amount must be at least 0.01')
    .max(1000000, 'Amount must be less than 1,000,000'),
});

export type FinanceItem = z.infer<typeof FinanceItemSchema>;
export type FinanceType = 'income' | 'expense';
