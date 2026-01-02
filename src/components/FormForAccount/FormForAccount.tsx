import { useForm, type SubmitHandler } from 'react-hook-form';
import type { FinanceItem } from '../../types/main.type';
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
    <section className=' container px-2 flex w-full justify-center items-center col-auto relative'>
      <FormForAccountError errors={errors} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex justify-center items-center text-md w-full'>
        <input
          type='text'
          placeholder='description'
          id='description'
          {...register('description')}
          className='border-2 border-accent px-3 rounded-l-2xl py-0.5 w-1/3 min-w-24'
        />
        <input
          type='number'
          placeholder='amount'
          min={0}
          {...register('amount')}
          className='border-2 border-accent px-3 py-0.5 w-1/6 min-w-12 box-border '
        />
        <select
          defaultValue={'income'}
          {...register('type')}
          className='border-2 border-accent px-3 py-0.5 box-border rounded-r-lg cursor-pointer'>
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <input
          type='submit'
          id='submit'
          value={'Add'}
          className='bg-accent text-black-300 px-3 border-2 py-0.5 border-black-100 rounded-r-2xl rounded-l-lg ml-0.5 text-base font-medium hover:border-accent transition-all ease-in-out cursor-pointer'
        />
      </form>
    </section>
  );
}
