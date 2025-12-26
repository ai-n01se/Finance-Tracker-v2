import { useForm, type SubmitHandler } from 'react-hook-form';
import type { FinanceItem } from '../../types/main.type';
import './FormForAccount.css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { validateEntry } from '../../hook/hookValidateEntry';
import FormForAccountError from './FormForAccountError/FormForAccountError';

export default function FormForAccount({
  addEntry,
}: {
  addEntry: (newEntry: FinanceItem) => void;
}) {
  const { register, handleSubmit, resetField } = useForm<FinanceItem>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit: SubmitHandler<FinanceItem> = (data) => {
    const newEntry: FinanceItem = {
      id: uuid(),
      description: data.description,
      amount: parseFloat(data.amount + ''),
      type: data.type,
    };

    const result = validateEntry(newEntry);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        description: fieldErrors.description?.[0] || '',
        amount: fieldErrors.amount?.[0] || '',
      });
      return;
    }

    addEntry(newEntry);
    resetField('description');
    resetField('amount');
    setErrors({});
  };

  return (
    <section className='form-for-account'>
      <FormForAccountError errors={errors} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='description'
          id='description'
          {...register('description')}
        />
        <input
          type='number'
          placeholder='amount'
          min={0}
          {...register('amount')}
        />
        <select defaultValue={'income'} {...register('type')}>
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <input type='submit' id='submit' value={'Add'} />
      </form>
    </section>
  );
}
