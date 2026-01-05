// import './HistoryFinance.css';
import HistoryFinanceLi from './historyFinanceElement/historyFinanceLi';
import { useEntriesStore } from '../../store/zustand';

export default function HistoryFinance() {
  const { clearEntries, entries } = useEntriesStore();
  return (
    <section className='flex justify-center items-center w-full container flex-col'>
      <h2 className='bg-black-200 border-2 border-black-100 px-4 py-2 rounded-t-2xl rounded-b-lg text-center mb-1 w-4/5 relative'>
        History Finance
        <button
          className=' bg-red-700 px-3 py-0.5 rounded-2xl absolute right-2 top-1.5'
          onClick={() => clearEntries()}>
          Clear History
        </button>
      </h2>
      <ul className='bg-black-200 border-2 border-black-100 rounded-2xl w-4/5 h-96 overflow-y-auto'>
        {entries.map((item) => (
          <HistoryFinanceLi key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
