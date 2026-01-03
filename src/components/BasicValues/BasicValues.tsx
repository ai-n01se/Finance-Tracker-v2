import { updateBalance } from '../../utils/updateBalance';
import type { FinanceItem } from '../../types/main.type';

export default function BasicValues({ entries }: { entries: FinanceItem[] }) {
  const { balance, income, cost } = updateBalance(entries);
  return (
    <section className='flex container justify-evenly items-center mt-5 font-bold text-2xl mb-7'>
      <div className='text-center text-red-500'>
        <h2>Cost</h2>
        <p className='border-2 border-black-100 rounded-2xl min-w-32 p-1 bg-black-200'>
          {cost}
        </p>
      </div>
      <div className='text-center'>
        <h2>Balance</h2>
        <p className='border-2 border-black-100 rounded-2xl min-w-32 p-1 bg-black-200'>
          {balance}
        </p>
      </div>
      <div className='text-center text-green-500'>
        <h2>Income</h2>
        <p className='border-2 border-black-100 rounded-2xl min-w-32 p-1 bg-black-200'>
          {income}
        </p>
      </div>
    </section>
  );
}
