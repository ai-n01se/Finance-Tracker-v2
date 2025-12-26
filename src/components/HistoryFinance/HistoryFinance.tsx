import './HistoryFinance.css';
import HistoryFinanceLi from './historyFinanceElement/historyFinanceLi';
import type { FinanceItem } from '../../types/main.type';

export default function HistoryFinance({
  entries,
}: {
  entries: FinanceItem[];
}) {
  const newEntries = [...entries].reverse();
  return (
    <section className='history-finance'>
      <h2>History Finance</h2>
      <ul>
        {newEntries.map((item) => (
          <HistoryFinanceLi key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
