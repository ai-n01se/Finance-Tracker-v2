// import './HistoryFinance.css';
import HistoryFinanceLi from './historyFinanceElement/historyFinanceLi';
import type { FinanceItem } from '../../types/main.type';

export default function HistoryFinance({
  entries,
}: {
  entries: FinanceItem[];
}) {
  const newEntries = [...entries].reverse();
  return (
    <section className='flex justify-center items-center w-full container flex-col'>
      <h2 className='bg-black-200 border-2 border-black-100 px-4 py-2 rounded-t-2xl rounded-b-lg text-center mb-1 w-4/5'>
        History Finance
      </h2>
      <ul className='bg-black-200 border-2 border-black-100 rounded-2xl w-4/5 h-96 overflow-y-auto'>
        {newEntries.map((item) => (
          <HistoryFinanceLi key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
