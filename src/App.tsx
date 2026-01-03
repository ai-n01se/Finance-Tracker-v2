import BasicValues from './components/BasicValues/BasicValues';
import FormForAccount from './components/FormForAccount/FormForAccount';
import HistoryFinance from './components/HistoryFinance/HistoryFinance';
import './App.css';
import { useEntriesStore } from './store/zustand';

function App() {
  const entries = useEntriesStore((state) => state.entries);
  const addEntry = useEntriesStore((state) => state.addEntries);

  return (
    <div className='flex w-full h-full flex-col gap-10 items-center'>
      <BasicValues entries={entries} />
      <FormForAccount addEntry={addEntry} />
      <HistoryFinance entries={entries} />
    </div>
  );
}

export default App;
