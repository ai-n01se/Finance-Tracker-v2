import './BasicValuesStyle.css';
import { updateBalance } from '../../utils/updateBalance';
import type { FinanceItem } from '../../types/main.type';

export default function BasicValues({ entries }: { entries: FinanceItem[] }) {
  const { balance, income, cost } = updateBalance(entries);
  return (
    <section className='basic-values'>
      <div className='cost'>
        <h2>Cost</h2>
        <p>{cost}</p>
      </div>
      <div className='balance'>
        <h2>Balance</h2>
        <p>{balance}</p>
      </div>
      <div className='income'>
        <h2>Income</h2>
        <p>{income}</p>
      </div>
    </section>
  );
}
