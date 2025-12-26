import type { FinanceItem } from '../../../types/main.type';
import './historyFinanceElement.css';

export default function HistoryFinanceLi({ item }: { item: FinanceItem }) {
  return (
    <li id='{item.id}' className='history-finance-li' key={item.id}>
      <p>
        {item.type === 'income' ? '+' : '-'}
        {item.amount}
      </p>
      <p>{item.description}</p>
      <p>{item.type}</p>
    </li>
  );
}
