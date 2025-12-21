import './HistoryFinance.css';
import HistoryFinanceLi from './historyFinanceElement/historyFinanceLi';
import { entries } from '../../store/store';

export default function HistoryFinance() {
  return (
    <section className='history-finance'>
      <h2>History Finance</h2>
      <ul>
        {entries.map((item) => (
          <HistoryFinanceLi key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
