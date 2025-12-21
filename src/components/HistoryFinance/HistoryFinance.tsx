import './HistoryFinance.css';
import HistoryFinanceLi from './historyFinanceElement/historyFinanceLi';

export default function HistoryFinance() {
  return (
    <section className='history-finance'>
      <h2>History Finance</h2>
      <ul>
        <HistoryFinanceLi
          item={{
            id: '1',
            description: 'Salary',
            type: 'income',
            amount: 5000,
          }}
        />
      </ul>
    </section>
  );
}
