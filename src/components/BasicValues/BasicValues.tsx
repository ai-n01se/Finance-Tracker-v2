import './BasicValuesStyle.css';
import { updateBalance } from '../../function/updateBalance';
import { subscribe } from '../../store/store';
import { useEffect, useState } from 'react';

export default function BasicValues() {
  // Створюємо єдиний об'єкт стану для зручності
  const [stats, setStats] = useState(updateBalance());

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setStats(updateBalance());
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className='basic-values'>
      <div className='cost'>
        <h2>Cost</h2>
        <p>{stats.cost}</p>
      </div>
      <div className='balance'>
        <h2>Balance</h2>
        <p>{stats.balance}</p>
      </div>
      <div className='income'>
        <h2>Income</h2>
        <p>{stats.income}</p>
      </div>
    </section>
  );
}
