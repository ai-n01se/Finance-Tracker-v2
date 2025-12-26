import BasicValues from './components/BasicValues/BasicValues';
import FormForAccount from './components/FormForAccount/FormForAccount';
import HistoryFinance from './components/HistoryFinance/HistoryFinance';
import './App.css';
import { useEntries } from './store/store';
import { useEffect } from 'react';
import { loadEntriesFromLocalStorage } from './utils/localStorage';

function App() {
  const { entries, addEntry, addEntryWithLocalStorage } = useEntries();

  useEffect(() => {
    const loadedEntries = loadEntriesFromLocalStorage('financeEntries');
    if (loadedEntries) {
      addEntryWithLocalStorage(loadedEntries);
    }
  }, []);

  return (
    <div className='main'>
      <BasicValues entries={entries} />
      <FormForAccount addEntry={addEntry} />
      <HistoryFinance entries={entries} />
    </div>
  );
}

export default App;
