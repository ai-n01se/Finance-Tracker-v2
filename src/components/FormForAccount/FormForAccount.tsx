import './FormForAccount.css';
import { useState } from 'react';
import type { FinanceType } from '../../types/main.type';
import type { FinanceItem } from '../../types/main.type';

export default function FormForAccount({
  addEntry,
}: {
  addEntry: (newEntry: FinanceItem) => void;
}) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [financeType, setFinanceType] = useState('income');

  return (
    <section className='form-for-account'>
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
          onChange={(e) => setFinanceType(e.target.value)}>
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <button
          type='submit'
          id='submit'
          onClick={() => {
            addEntry({
              id: Date.now().toString(),
              description,
              type: financeType as FinanceType,
              amount: parseFloat(amount),
            });
            setDescription('');
            setAmount('');
          }}>
          Add
        </button>
      </form>
    </section>
  );
}
