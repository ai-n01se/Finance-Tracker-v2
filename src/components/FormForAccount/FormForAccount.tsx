import './FormForAccount.css';
import { useState } from 'react';
import { type FinanceType, type FinanceItem } from '../../types/main.type';
import { v4 as uuid } from 'uuid';
import { validateEntry } from '../../hook/hookValidateEntry';
import FormForAccountError from './FormForAccountError/FormForAccountError';

export default function FormForAccount({
  addEntry,
}: {
  addEntry: (newEntry: FinanceItem) => void;
}) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [financeType, setFinanceType] = useState<FinanceType>('income');
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <section className='form-for-account'>
      <FormForAccountError errors={errors} />
      <form action='finance_form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='description'
          id='description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='number'
          name='amount'
          id='amount'
          placeholder='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min={0}
        />
        <select
          name='finance_type'
          id='finance_type'
          value={financeType}
          onChange={(e) => setFinanceType(e.target.value as FinanceType)}>
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <button
          type='submit'
          id='submit'
          onClick={() => {
            const handleSubmitEntry: FinanceItem = {
              id: uuid(),
              description,
              type: financeType as FinanceType,
              amount: parseFloat(amount),
            };

            const result = validateEntry(handleSubmitEntry);

            if (!result.success) {
              const fieldErrors = result.error.flatten().fieldErrors;
              setErrors({
                description: fieldErrors.description?.[0] || '',
                amount: fieldErrors.amount?.[0] || '',
              });
              return;
            }
            addEntry(result.data);
            setDescription('');
            setAmount('');
            setErrors({});
          }}>
          Add
        </button>
      </form>
    </section>
  );
}
